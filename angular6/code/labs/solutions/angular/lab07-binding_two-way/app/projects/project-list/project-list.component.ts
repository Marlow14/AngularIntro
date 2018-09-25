import { Component } from '@angular/core';

import { Project } from '../shared/project.model';
import { PROJECTS } from '../shared/mock-projects';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  projects: Project[] = PROJECTS;

  onEdit(project) {
    project.originalProject = Object.assign({}, project);
    project.editing = true;
  }

  onCancel(project, event) {
    event.preventDefault();
    this.projects[this.projects.indexOf(project)] = project.originalProject;
    //this line not needed at this point but leaving here for later
    project.editing = false;
  }
}
