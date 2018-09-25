import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from '../shared/project.model';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  @Input() project: Project;
  @Output() edit = new EventEmitter<Project>();
  actionDropdownIsOpen = false;

  toggleActions() {
    this.actionDropdownIsOpen = !this.actionDropdownIsOpen;
  }

  getDropdownCssClasses() {
    return {
      dropdown: true,
      open: this.actionDropdownIsOpen,
    };
  }

  onEdit(project: Project) {
    this.edit.emit(project);
  }
}
