import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

import { Project} from '../shared/project.model';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class ProjectCardComponent {
  @Input() project: Project;
  @Output() edit = new EventEmitter<Project>();
  actionDropdownIsOpen = false;

  toggleActions(){
    this.actionDropdownIsOpen = !this.actionDropdownIsOpen;
  }

  getDropdownCssClasses(){
    return {
      dropdown: true,
      open: this.actionDropdownIsOpen
    }
  }

  onEditClick(project: Project){
    this.edit.emit(project);
  }
}


