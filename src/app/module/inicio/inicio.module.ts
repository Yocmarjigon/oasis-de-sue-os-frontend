import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { UneteCorporacionComponent } from './unete-corporacion/unete-corporacion.component';



@NgModule({
  declarations: [
    IndexComponent, 
    UneteCorporacionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InicioModule { }
