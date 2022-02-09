import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ViewsModule } from './views/views.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
BrowserModule,
    // Angular
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    //Modulos
    CoreModule,
    ViewsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
