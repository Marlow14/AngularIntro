import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClassBindingDemoComponent } from './demos/class-binding-demo.component';
import { MultipleClassBindingDemoComponent } from './demos/multiple-class-binding-demo.component';
import { NgClassBindingDemoComponent } from './demos/ngclass-binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingDemoComponent,
    MultipleClassBindingDemoComponent,
    NgClassBindingDemoComponent,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
