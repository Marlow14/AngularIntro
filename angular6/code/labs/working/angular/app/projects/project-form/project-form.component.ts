import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import { PROJECTS} from '../shared/mock-projects';
import { CustomValidators } from '../shared/custom.validators';

import {
  ReactiveFormsModule, AbstractControl, FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
})
export class ProjectFormComponent implements OnInit {
  @Input() project: Project;
  @Output() cancel = new EventEmitter<Project>();
  @Output() save = new EventEmitter<Project>();

  projectForm: FormGroup;

  hasAnyError(control: AbstractControl) {
    return control.invalid && control.dirty && control.touched;
  }

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 3 characters.',
      forbiddenName: "Nothing is impossible"
    },
    description: {
      required: 'Description is required.',
    },
  };

  getValidationMessages(controlName: string): string[] {
    let formControl = this.projectForm.get(controlName);
    if (!formControl.errors) {
      return [];
    }
    return Object.keys(formControl.errors).map(key => {
      return this.validationMessages[controlName][key];
    });
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: new FormControl(this.project.name, [
        Validators.required,
        Validators.minLength(3),
        CustomValidators.forbiddenName("impossible"),
      ]),
      description: new FormControl(this.project.description),
      isActive: new FormControl(this.project.isActive),
    });
  }

  onCancel(project, event) {
    event.preventDefault();
    this.cancel.emit(this.project);
  }

  onSubmit() {
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
}

