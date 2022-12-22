import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    QuienesSomosRoutingModule
  ]
})
export class QuienesSomosModule { }
