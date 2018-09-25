// app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>Hello Angular</h1>',
})
export class AppComponent {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// app/app.module.ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

// app/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule);
