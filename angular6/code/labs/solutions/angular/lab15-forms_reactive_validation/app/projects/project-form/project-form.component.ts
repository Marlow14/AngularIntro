import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
export class ProjectFormComponent implements OnInit {
  @Input() project: Project;
  @Output() cancel = new EventEmitter<Project>();
  @Output() save = new EventEmitter<Project>();
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      name: new FormControl(this.project.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(
        this.project.description,
        Validators.required
      ),
      isActive: new FormControl(this.project.isActive),
    }, { updateOn: 'blur' });
  }

  onSave() {
    if (this.projectForm.invalid) {
      return;
    }
    let updatedProject = Object.assign(
      {},
      this.project,
      this.projectForm.value
    );
    this.save.emit(updatedProject);
  }

  onCancel(project, event) {
    event.preventDefault();
    this.cancel.emit(this.project);
  }
}
