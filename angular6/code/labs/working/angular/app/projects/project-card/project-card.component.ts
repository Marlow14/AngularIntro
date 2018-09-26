import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';

import {Router} from '@angular/router';

import { Project} from '../shared/project.model';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProjectCardComponent {
  @Input() project: Project;
  @Output() edit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();

  actionDropdownIsOpen = false;

  constructor(private router:Router ){}

  toggleActions() {
    this.actionDropdownIsOpen = !this.actionDropdownIsOpen;
  }

  getDropdownCssClasses() {
    return {
      dropdown: true,
      open: this.actionDropdownIsOpen,
    };
  }

  onEditClick(project: Project) {
    this.edit.emit(project);
  }
onDelete(project: Project, event){
  event.preventDefault();
  this.delete.emit(project);
}

onSelect(project: Project, event){
  event.preventDefault();
  this.router.navigate(['/projects', project.id])
}

}


