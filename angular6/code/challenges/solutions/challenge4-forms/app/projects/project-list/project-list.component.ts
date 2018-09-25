import { Component } from '@angular/core';

import { Project } from '../shared/project.model';
import { PROJECTS } from '../shared/mock-projects';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  projects: Project[] = PROJECTS;
}
