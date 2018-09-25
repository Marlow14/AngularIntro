import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent} from './app.component';

import { ProjectListComponent} from './projects/project-list/project-list.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ProjectFormComponent} from './projects/project-form/project-form.component';
import { ProjectService } from './projects/shared/project.service';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
  ],
  imports: [BrowserModule,
  ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [ProjectService]
})
export class AppModule {}
