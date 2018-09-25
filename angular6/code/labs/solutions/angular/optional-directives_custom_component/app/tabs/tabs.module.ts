import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TabSetComponent } from './tab-set/tab-set.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [TabSetComponent, TabComponent],
  imports: [CommonModule],
  exports: [TabSetComponent, TabComponent],
})
export class TabsModule {}
