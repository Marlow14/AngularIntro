import { Component, OnInit, Input } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';
import { ContractTypeService } from '../shared/contract-type.service';

@Component({
  selector: 'contract-type-input',
  templateUrl: './contract-type-input.component.html',
})
export class ContractTypeInputComponent implements OnInit {
  @Input() contractType: ContractType;
  errorMessage: string;

  constructor(private contractTypeService: ContractTypeService) {}

  ngOnInit() {}

  stopEdit() {
    this.contractType.editing = false;
  }

  cancelEdit() {
    this.contractType.editing = false;
  }

  save(modelDirective) {
    if (modelDirective.invalid) {
      return;
    }
    this.contractType.editing = false;
    this.contractType.name = modelDirective.value;
    this.contractTypeService
      .put(this.contractType)
      .subscribe(c => c, error => (this.errorMessage = error));
  }
}
