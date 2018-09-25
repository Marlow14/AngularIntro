import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { ProjectService } from './projects/shared/project.service';
import { Logger } from './shared/logger.service';
import { EchoChamberComponent } from './echo-chamber/echo-chamber.component';
import { EchoChamberService } from './echo-chamber/shared/echo-chamber.service';
import { WebSocketService } from './shared/websocket.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCardComponent,
    ProjectFormComponent,
    EchoChamberComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [ProjectService, Logger, WebSocketService, EchoChamberService],
})
export class AppModule {}
