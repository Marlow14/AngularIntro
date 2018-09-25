import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
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
})
export class ProjectCardComponent implements OnInit {
  @Input() project: Project;
  @Output() edit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();

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

  onDelete(project: Project, event) {
    event.preventDefault();
    this.delete.emit(project);
  }

  constructor() {}

  ngOnInit() {}
}
