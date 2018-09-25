import { Component, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';
import { Observable } from 'rxjs';

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

  //using Observables
  getProjects() {
    this.projectService
      .list()
      .subscribe(
        projects => (this.projects = projects),
        error => (this.errorMessage = error)
      );
  }

  //using Promises
  // getProjects(){
  //     this.projectService.list()
  //         .then(projects => this.projects = projects)
  //         .catch(error=> this.errorMessage = error);
  // }

  onEdit(project) {
    //project.originalProject = Object.assign({}, project);
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
    //this.projects[this.projects.indexOf(project)] = project.originalProject;
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
