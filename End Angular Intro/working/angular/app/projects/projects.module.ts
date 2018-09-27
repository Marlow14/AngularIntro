import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent} from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { ProjectService } from './shared/project.service';
import { projectsRoutingModule } from './projects.routing';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProjectDetailComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, projectsRoutingModule],
  providers: [ProjectService],
})
export class ProjectsModule {}
