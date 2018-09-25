import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Logger } from './shared/logger.service';
import { HomeComponent } from './home/home.component';
import { appRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, appRoutingModule],
  bootstrap: [AppComponent],
  providers: [Logger],
})
export class AppModule {}
