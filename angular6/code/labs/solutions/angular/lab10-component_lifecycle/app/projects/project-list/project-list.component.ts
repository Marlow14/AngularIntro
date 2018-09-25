import { Component, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  //providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  currentDropdownIndex: number = -1;

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

  onCancel(project, event) {
    event.preventDefault();
    this.projects[this.projects.indexOf(project)] = project.originalProject;
    project.editing = false;
    this.closeDropdown();
  }

  toggleActions(index) {
    if (this.currentDropdownIndex === index) {
      this.closeDropdown();
      return;
    }
    this.currentDropdownIndex = index;
  }

  private closeDropdown() {
    this.currentDropdownIndex = -1;
  }

  getDropdownCssClasses(index) {
    let classes = {
      dropdown: true,
      open: this.currentDropdownIndex === index,
    };
    return classes;
  }
}
