import { Component, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';
import { Observable, Subject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
  errorMessage: string;
  projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projects$ = this.projectService.list().pipe(
      catchError(error => {
        this.errorMessage = error;
        return of([]);
      })
    );
  }

  onEdit(project) {
    project.originalProject = Object.assign({}, project);
    project.editing = true;
  }

  // onSave(updatedProject) {
  //   updatedProject.editing = false;
  //   let index = this.projects.findIndex(p => p.id == updatedProject.id);
  //   this.projects[index] = updatedProject;
  // }

  // onCancel(project) {
  //   this.projects$[this.projects.indexOf(project)] = project.originalProject;
  //   project.editing = false;
  // }
}
