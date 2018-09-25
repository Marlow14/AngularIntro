import { Component, OnInit } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';
import { CONTRACT_TYPES } from '../shared/mock-contract-types';

@Component({
  selector: 'contract-type-list',
  templateUrl: './contract-type-list.component.html',
})
export class ContractTypeListComponent implements OnInit {
  ContractTypes: ContractType[] = CONTRACT_TYPES;
  constructor() {}

  ngOnInit() {}

  edit(contractType) {
    contractType.editing = true;
  }

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
