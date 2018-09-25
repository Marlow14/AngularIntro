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

  stopEdit() {
    this.contractType.editing = false;
  }

  cancelEdit() {
    this.contractType.editing = false;
  }

  save(modelDirective) {
    this.contractType.editing = false;
    console.log(modelDirective.value);
  }
}
