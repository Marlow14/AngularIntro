import { Injectable } from '@angular/core';
import { ContractType } from './contract-type.model';

@Injectable()
export default class ContractTypeService {
  list(): Promise<ContractType[]> {
    return Promise.resolve(this.contractTypes);
  }

  private contractTypes = [
    new ContractType(-1, 'Select...'),
    new ContractType(1, 'Fixed Bid'),
    new ContractType(2, 'Time and Materials'),
  ];
}
