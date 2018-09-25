import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
})
export class ProjectFormComponent {
  @Input() project: Project;
  @Output() cancel = new EventEmitter<Project>();

  onCancel(project, event) {
    event.preventDefault();
    this.cancel.emit(project);
  }
}
