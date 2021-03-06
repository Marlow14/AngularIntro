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
    console.log(form);
    console.log(form.value);

    this.save.emit(this.project);
  }

  onCancel(project, event) {
    event.preventDefault();
    this.cancel.emit(this.project);
  }
}
