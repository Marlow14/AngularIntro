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
}
