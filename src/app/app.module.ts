import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosRoutingModule } from './module/nosotros/nosotros-routing.module';
import { NavBarComponent } from './plantilla/nav-bar/nav-bar.component';
import { FooterComponent } from './plantilla/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NosotrosRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}