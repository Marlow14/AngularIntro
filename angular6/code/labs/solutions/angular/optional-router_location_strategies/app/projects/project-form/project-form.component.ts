import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Project } from '../shared/project.model';
import ContractTypeService from '../../contract-types/shared/contract-type.service';
import { ContractType } from '../../contract-types/shared/contract-type.model';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styles: [
    `.btn-cancel{
            margin-left:15px;
            }`,
  ],
  providers: [ContractTypeService],
})
export class ProjectFormComponent implements OnInit {
  @Input() project: Project;
  @Output() save = new EventEmitter<Project>();
  @Output() cancel = new EventEmitter<Project>();

  contractTypes: ContractType[];

  constructor(private contractTypeService: ContractTypeService) {}

  ngOnInit(): void {
    this.contractTypeService
      .list()
      .then(contractTypes => (this.contractTypes = contractTypes));
  }

  onSave(form) {
    if (form.invalid) {
      return;
    }
    let updatedProject = Object.assign(this.project, form.value.project);
    this.save.emit(this.project);
  }

  onCancel(project, event) {
    event.preventDefault();
    this.cancel.emit(this.project);
  }

  hideErrors(modelDirective) {
    return (
      modelDirective.valid || modelDirective.pristine || !modelDirective.touched
    );
  }

  hideError(modelDirective, validationType) {
    if (!modelDirective.errors) {
      return true;
    }
    return !modelDirective.errors[validationType];
  }

  setErrorClass(modelDirective) {
    let hideError = this.hideErrors(modelDirective);
    return {
      'has-error': !hideError,
    };
  }
}
