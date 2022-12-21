import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})



export class NavBarComponent {
  @ViewChild('asBtnNav') btnNab!: ElementRef;

  constructor( private route: Router ,private render2: Renderer2){}

  activador (){
    const btnNab = this.btnNab.nativeElement; 
    this.render2.setStyle(btnNab, 'border-botton', 'solid 2px #1AA94F')
  }

}
