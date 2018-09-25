import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { ProjectService } from './projects/shared/project.service';

import { Logger } from './shared/logger.service';
import { silentLogger } from './shared/silent-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  providers: [ProjectService, Logger],
})
export class AppModule {}
