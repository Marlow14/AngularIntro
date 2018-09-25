import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { ProjectService } from './projects/shared/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [ProjectService],
})
export class AppModule {}
