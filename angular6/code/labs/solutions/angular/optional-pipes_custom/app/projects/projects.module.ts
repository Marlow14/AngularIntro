import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { projectsRoutingModule } from './projects.routing';
import { ProjectService } from './shared/project.service';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CharacterLengthPipe } from '../shared/pipes/character-length.pipe';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    ProjectDetailComponent,
  ],
  imports: [CommonModule, FormsModule, projectsRoutingModule],
  providers: [ProjectService, CharacterLengthPipe],
})
export class ProjectsModule {}
