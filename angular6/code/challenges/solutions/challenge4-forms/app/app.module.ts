import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ContractTypeListComponent } from './contract-types/contract-type-list/contract-type-list.component';
import { ContractTypeDetailComponent } from './contract-types/contract-type-detail/contract-type-detail.component';
import { ContractTypeInputComponent } from './contract-types/contract-type-input/contract-type-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ContractTypeListComponent,
    ContractTypeDetailComponent,
    ContractTypeInputComponent,
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
