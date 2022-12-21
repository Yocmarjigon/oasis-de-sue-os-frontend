import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './module/inicio/index/index.component';

const routes: Routes = [
  {path: 'inicio', component: IndexComponent},
  {path: '', redirectTo: '/inicio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
