import {
  Component,
  Directive,
  HostListener,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Renderer,
  Host,
} from '@angular/core';

@Directive({
  selector: '[myConfirm]',
})
export class ConfirmDirective {
  @Input('myConfirm') message: string;
  @Output() confirmed = new EventEmitter();
  @Output() canceled = new EventEmitter();
  @HostBinding('attr.role') role = 'button';

  @HostListener('click', ['$event'])
  onClick(event) {
    event.preventDefault();
    if (window.confirm(this.message)) {
      this.confirmed.emit();
    } else {
      this.canceled.emit();
    }
  }
}
