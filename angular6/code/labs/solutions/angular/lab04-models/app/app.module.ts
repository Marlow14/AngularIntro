import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';

@NgModule({
  declarations: [AppComponent, ProjectListComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
