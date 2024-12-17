import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { ApicrudService } from '../services/apicrud.service';
import { Eventos } from '../interfaces/eventos';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements AfterViewInit, OnInit {

  swiper: any;

  ngAfterViewInit() {
    const swiperOptions: SwiperOptions = {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    };

    this.swiper = new Swiper('.swiper-container', swiperOptions);
  };

  events: Eventos[]=[];

  constructor(private menucontroller: MenuController, private navCtrl: NavController, private router: Router,
              private apicrudservice: ApicrudService) {}

  ngOnInit(){
    this.apicrudservice.getEventos().subscribe((data)=>{
      this.events = data;
    })
  }

  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('first');
  }
  registerToEvent() {
    // Navegar a la página de registro con los detalles del evento
    this.navCtrl.navigateForward('/registro-evento');
}
  
}
