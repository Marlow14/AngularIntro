import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../../shared/custom.validators';

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
        CustomValidators.forbiddenName('impossible'),
      ]),
      description: new FormControl(this.project.description),
      isActive: new FormControl(this.project.isActive),
    });
  }

  forbiddenName(forbiddenName) {
    return (control: AbstractControl): any => {
      if (control.value.toLowerCase() == forbiddenName.toLowerCase()) {
        return { forbiddenName: true };
      }
      return null;
    };
  }

  // forbiddenName(control: AbstractControl): any{
  //     if(control.value.toLowerCase() == "impossible" ){
  //         return {forbiddenName: true}
  //     }
  //     return null;
  // }

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 3 characters long.',
      forbiddenName: 'Nothing is impossible.',
    },
    description: {
      required: 'Description is required.',
    },
  };

  hasAnyError(control: AbstractControl) {
    return control.invalid && control.dirty && control.touched;
  }

  getValidationMessages(controlName: string): string[] {
    let formControl = this.projectForm.get(controlName);
    if (!formControl.errors) {
      return [];
    }
    return Object.keys(formControl.errors).map(key => {
      return this.validationMessages[controlName][key];
    });
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
