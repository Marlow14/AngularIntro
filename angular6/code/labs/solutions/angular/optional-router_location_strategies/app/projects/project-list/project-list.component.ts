import { Component, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
  errorMessage: string;
  projects: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectService
      .list()
      .subscribe(
        projects => (this.projects = projects),
        error => (this.errorMessage = error)
      );
  }

  onEdit(project) {
    project.editing = true;
  }

  onSave(project) {
    project.editing = false;
    this.projectService.put(project).subscribe(p => {
      this.projects[this.projects.indexOf(project)] = p;
      return p;
    }, error => (this.errorMessage = error));
  }

  onCancel(project) {
    project.editing = false;
  }

  onDelete(project: Project) {
    this.projectService
      .delete(project)
      .subscribe(
        () => (this.projects = this.projects.filter(p => p.id != project.id)),
        error => (this.errorMessage = error)
      );
  }
}
