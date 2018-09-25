import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectService } from './projects/shared/project.service';

@NgModule({
  declarations: [AppComponent, ProjectListComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  providers: [ProjectService],
})
export class AppModule {}
