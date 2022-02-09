import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[HomeComponent, ContatoComponent]
})
export class ViewsModule { }
