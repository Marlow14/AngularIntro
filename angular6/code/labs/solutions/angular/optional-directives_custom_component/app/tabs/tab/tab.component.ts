import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active" class="tab-pane">
      <ng-content></ng-content>
    </div>
  `,
})
export class TabComponent {
  @Input() title: string;
  @Input() active: boolean = false;
}
