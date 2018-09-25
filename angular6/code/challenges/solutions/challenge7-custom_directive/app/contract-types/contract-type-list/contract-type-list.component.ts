import { Component, OnInit } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';
import { CONTRACT_TYPES } from '../shared/mock-contract-types';
import { ContractTypeService } from '../shared/contract-type.service';

@Component({
  selector: 'contract-type-list',
  templateUrl: './contract-type-list.component.html',
})
export class ContractTypeListComponent implements OnInit {
  contractTypes: ContractType[];
  errorMessage: string;
  constructor(private contractTypeService: ContractTypeService) {}

  ngOnInit() {
    this.contractTypeService
      .list()
      .subscribe(d => (this.contractTypes = d), e => (this.errorMessage = e));
  }
}
