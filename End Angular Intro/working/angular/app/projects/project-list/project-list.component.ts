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
  errorMessage: string;
  // projects: Project[] = PROJECTS;
  projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService
      .list()
      .subscribe(projectData => (this.projects = projectData),
      error => (this.errorMessage = error));
  }

  onEdit(project) {
    // project.originalProject = Object.assign({}, project);
    project.editing = true;
  }

  onCancel(project) {
    // event.preventDefault();
    // this.projects[this.projects.indexOf(project)] = project.originalProject;
    project.editing = false;
    // this.closeDropdown();
  }

  onSave(updatedProject){
    updatedProject.editing = false;
    this.projectService.put(updatedProject).subscribe(p=> {
      let index = this.projects.findIndex(p => p.id == updatedProject.id);
      this.projects[index] = updatedProject;
    }, error => (this.errorMessage = error));
    // let index = this.projects.findIndex(p => p.id == updatedProject.id);
    // this.projects[index] = updatedProject;
  }

  onDelete(project: Project){
    this.projectService.delete(project).subscribe(() => this.projects = this.projects.filter(p => p.id != project.id),
    (error) => this.errorMessage = error)
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
