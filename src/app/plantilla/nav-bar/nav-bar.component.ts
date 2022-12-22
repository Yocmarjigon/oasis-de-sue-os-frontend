
import { animate } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})



export class NavBarComponent implements OnInit {
  @ViewChild('asBtnNav') btnNab!: ElementRef;
  @ViewChild('asNavBar') navBar!: ElementRef;
  @ViewChild('asBtnBars') btnBars!: ElementRef;

  activar: boolean= true

  constructor( private route: Router ,private render2: Renderer2){}


  ngOnInit(): void {
    console.log()
  }


  activador (){
    this.activar = !this.activar
    const navBar = this.navBar.nativeElement;
    const btnBars = this.btnBars.nativeElement;
    if(this.activar === true){ 
      this.render2.setStyle(navBar, 'left', '-300px')
    }else{this.render2.setStyle(navBar, 'left', '0'), this.render2.setStyle(btnBars, 'animation', ' barras')}
   
  

  }

}
