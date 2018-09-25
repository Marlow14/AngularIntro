import { Component, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
  projects: Project[];

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
    this.projects[this.projects.indexOf(project)] = project.originalProject;
    project.editing = false;
  }
}
