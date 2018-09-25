import {
  Component,
  OnInit,
  AfterContentInit,
  QueryList,
  ContentChildren,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tab-set',
  templateUrl: './tab-set.component.html',
})
export class TabSetComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter(tab => tab.active);

    // if there is no active tab set, activate the first
    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => (tab.active = false));

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
