import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Project } from '../shared/project.model';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  // styles: [`h4{
  //             color:#9c27b0;
  //           }`],
  styleUrls: ['./project-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input() project: Project;
  @Output() edit = new EventEmitter<Project>();
  actionDropdownIsOpen = false;

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
