import { Component } from '@angular/core';
import {ContractType} from '../shared/contract-type.model';
import { CONTRACT_TYPES} from '../shared/mock-contract-types';

@Component({
  selector: 'contract-types',
  templateUrl: './contract-type.component.html',
})
export class ContractTypesComponent {
  ContractTypes: ContractType[] = CONTRACT_TYPES;

  edit(contractType) {
    contractType.editingContract = Object.assign({}, contractType);
    contractType.editing = true;
  }
  onEscape(contractType, event) {
    event.preventDefault();
    this.ContractTypes[this.ContractTypes.indexOf(contractType)] = contractType.editingContract;
    contractType.editing = false;
  }

  onEnter(contractType) {

    contractType.editing = false;
  }

  onBlur(contractType) {

    contractType.editing = false;
  }
}
