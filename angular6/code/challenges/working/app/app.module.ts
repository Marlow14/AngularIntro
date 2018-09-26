import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';

import { ContractTypesComponent}from './contract-types/contract-types/contract-types.component'

@NgModule({
  declarations: [AppComponent, ProjectListComponent, ContractTypesComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
