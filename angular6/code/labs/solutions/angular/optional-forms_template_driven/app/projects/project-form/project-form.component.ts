import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Project } from '../shared/project.model';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styles: [
    `
            .btn-cancel{
                margin-left: 15px;
            }
    `,
  ],
})
export class ProjectFormComponent {
  @Input() project: Project;
  @Output() cancel = new EventEmitter<Project>();
  @Output() save = new EventEmitter<Project>();

  onSave() {
    this.save.emit(this.project);
  }

  onCancel(project, event) {
    event.preventDefault();
    this.cancel.emit(this.project);
  }
}
