import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AppRenderer } from './app-renderer.service';

// Renderer is deprecated see https://github.com/angular/angular/issues/15008#issuecomment-285141070
@Directive({
  selector: 'input',
})
export class FocusInput {
  constructor(public renderer: AppRenderer, public elementRef: ElementRef) {}

  ngOnInit() {
    this.renderer.invokeElementMethod(
      this.elementRef.nativeElement,
      'focus',
      []
    );
  }
}
