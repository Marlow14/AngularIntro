import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  DoCheck,
} from '@angular/core';

import { Project } from '../shared/project.model';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent implements DoCheck {
  @Input() project: Project;
  @Output() edit = new EventEmitter<Project>();
  actionDropdownIsOpen = false;

  ngDoCheck() {
    this.project.lastChanged = new Date();
  }

  getDropdownCssClasses() {
    return {
      dropdown: true,
      open: this.actionDropdownIsOpen,
    };
  }

  toggleActions() {
    this.actionDropdownIsOpen = !this.actionDropdownIsOpen;
  }

  onEdit(project: Project, event) {
    event.preventDefault();
    this.edit.emit(project);
  }
}
