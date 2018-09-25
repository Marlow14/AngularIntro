import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

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
    this.projectService
      .list()
      .subscribe(
        projectsData => (this.projects = projectsData),
        error => (this.errorMessage = error)
      );
  }

  onEdit(project) {
    project.editing = true;
  }

  onSave(updatedProject) {
    updatedProject.editing = false;
    this.projectService.put(updatedProject).subscribe(p => {
      let index = this.projects.findIndex(p => p.id == updatedProject.id);
      this.projects[index] = updatedProject;
    }, error => (this.errorMessage = error));
  }

  onCancel(project) {
    project.editing = false;
  }
}
