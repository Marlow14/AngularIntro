import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  template: `<h3>Home</h3>
                <tab-set>
                <tab title="Tab 1">Tab 1 Content</tab>
                <tab title="Tab 2">Tab 2 Content</tab>
                </tab-set>`,
})
export class HomeComponent {}
