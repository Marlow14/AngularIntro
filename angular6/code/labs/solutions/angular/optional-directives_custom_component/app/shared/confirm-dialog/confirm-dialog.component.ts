import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  @Input() message: string;
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();
  hidden: boolean = true;

  open() {
    this.hidden = false;
  }

  close() {
    this.hidden = true;
  }

  onConfirm() {
    this.confirm.emit();
    this.close();
  }

  onCancel() {
    this.cancel.emit();
    this.close();
  }
}
