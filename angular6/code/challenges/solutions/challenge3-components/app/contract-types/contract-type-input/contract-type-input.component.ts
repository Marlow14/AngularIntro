import { Component, OnInit, Input } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';

@Component({
  selector: 'contract-type-input',
  templateUrl: './contract-type-input.component.html',
})
export class ContractTypeInputComponent implements OnInit {
  @Input() contractType: ContractType;

  constructor() {}

  ngOnInit() {}

  stopEdit(contractType) {
    contractType.editing = false;
  }

  cancelEdit(contractType) {
    contractType.editing = false;
  }

  save(contractType) {
    contractType.editing = false;
  }
}
