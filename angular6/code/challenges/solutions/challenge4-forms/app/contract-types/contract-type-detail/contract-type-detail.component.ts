import { Component, OnInit, Input } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';

@Component({
  selector: 'contract-type-detail',
  templateUrl: './contract-type-detail.component.html',
})
export class ContractTypeDetailComponent implements OnInit {
  @Input() contractType: ContractType;

  constructor() {}

  ngOnInit() {}

  edit(contractType) {
    contractType.editing = true;
  }
}
