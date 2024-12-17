import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  constructor(private menucontroller:MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menucontroller.open('first');
  }
  goIG() {
    window.location.href='http://www.instagram.com/g0lden_weed';
}
}
