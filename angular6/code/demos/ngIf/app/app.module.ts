import { BrowserModule } from '@angular/platform-browser';
import { App, ElseComponent, ElseThenComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [BrowserModule],
  declarations: [App, ElseComponent, ElseThenComponent],
  bootstrap: [App],
})
export class AppModule {}
