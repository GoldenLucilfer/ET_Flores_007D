import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(private menucontroller:MenuController) { }

  ngOnInit() {
  }
  goIG() {
    window.location.href='http://www.instagram.com/g0lden_weed';
  }
  mostrarMenu(){
    this.menucontroller.open('first');
  }
}


