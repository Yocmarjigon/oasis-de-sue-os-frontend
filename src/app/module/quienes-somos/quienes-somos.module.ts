import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuienesSomosRoutingModule } from './quienes-somos-routing.module';
import { IndexComponent } from './index/index.component';
import { PanelesCompromisoComponent } from './paneles-compromiso/paneles-compromiso.component';
import { FormaTrabajoComponent } from './forma-trabajo/forma-trabajo.component';


@NgModule({
  declarations: [IndexComponent, PanelesCompromisoComponent, FormaTrabajoComponent],
  imports: [
    CommonModule,
    QuienesSomosRoutingModule
  ]
})
export class QuienesSomosModule { }
