import { Component } from '@angular/core';
import { Project } from '../shared/project.model';
import { PROJECTS } from '../shared/mock-projects';

@Component({
  selector: 'project-list',
  template: `<h1>Projects</h1>
                <pre>{{projects | json}}</pre>
                `,
})
export class ProjectListComponent {
  projects: Project[] = PROJECTS;
}
