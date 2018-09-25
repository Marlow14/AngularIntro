import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Project } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  errorMessage: string;
  subscription: Subscription;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    let id = 1;

    this.subscription = this.projectService
      .find(id)
      .subscribe(p => (this.project = p), e => (this.errorMessage = e));
  }
}
