import { Component, OnInit} from '@angular/core';
import { Project } from '../shared/project.model';
import { PROJECTS} from '../shared/mock-projects';
import { ProjectService} from '../shared/project.service';

@Component({
  selector: 'project-list',
  // template: `<h1>Projects <ng-content></ng-content></h1>
  // <pre> {{projects | json }} </pre>`
  templateUrl: `./project-list.component.html`,
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService
      .list()
      .subscribe(projectData => (this.projects = projectData));
  }

  onEdit(project) {
    project.originalProject = Object.assign({}, project);
    project.editing = true;
  }

  onCancel(project) {
    // event.preventDefault();
    this.projects[this.projects.indexOf(project)] = project.originalProject;
    project.editing = false;
    // this.closeDropdown();
  }

  onSave(updatedProject){
    updatedProject.editing = false;
    let index = this.projects.findIndex(p => p.id == updatedProject.id);
    this.projects[index] = updatedProject;
  }

  // currentDropdownIndex: number = -1;

  // toggleActions(index) {
  //   if (this.currentDropdownIndex === index) {
  //     this.closeDropdown();
  //     return;
  //   }
  //   this.currentDropdownIndex = index;
  // }

  // private closeDropdown() {
  //   this.currentDropdownIndex = -1;
  // }

  // getDropdownCssClasses(index){
  //   let classes = {
  //     dropdown: true,
  //     open: this.currentDropdownIndex === index
  //   }
  //   return classes;
  // }
}
