import { Component } from '@angular/core';

import { Project } from '../shared/project.model';
import { PROJECTS } from '../shared/mock-projects';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  projects: Project[] = PROJECTS;
  currentDropdownIndex: number = -1;

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
