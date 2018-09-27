import { Component,
        OnInit,
        OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";

import { Project } from "../shared/project.model";
import { ProjectService } from "../shared/project.service";

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  paramsSubscription: Subscription;
  project: Project;
  errorMessage: string;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      if (params['id'] !== undefined){
        let id = +params['id'];
        this.subscription = this.projectService.find(id).subscribe((p) => this.project = p,
        (e) => this.errorMessage = e);
      }
    });
    // let id = 1;

    // this.subscription = this.projectService
    //   .find(id)
    //   .subscribe(p => (this.project = p), e => (this.errorMessage = e));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }

}
