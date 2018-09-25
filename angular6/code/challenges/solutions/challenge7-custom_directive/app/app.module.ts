import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ContractTypeListComponent } from './contract-types/contract-type-list/contract-type-list.component';
import { FocusInput } from './shared/focus-input';
import { ContractTypeDetailComponent } from './contract-types/contract-type-detail/contract-type-detail.component';
import { ContractTypeInputComponent } from './contract-types/contract-type-input/contract-type-input.component';
import { FormsModule } from '@angular/forms';
import { ContractTypeService } from './contract-types/shared/contract-type.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRenderer, AppDomRenderer } from './shared/app-renderer.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ContractTypeListComponent,
    FocusInput,
    ContractTypeDetailComponent,
    ContractTypeInputComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    ContractTypeService,
    { provide: AppRenderer, useClass: AppDomRenderer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
