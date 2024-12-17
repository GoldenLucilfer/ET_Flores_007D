import { Component } from '@angular/core';

interface Menu{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu:Menu[]=[
    {
      icon:'home-outline',
      name: 'Inicio',
      redirecTo: '/tabs/tab1'
    },
    {
      icon:'call-outline',
      name: 'Contacto',
      redirecTo: '/contacto'
    },
    {
      icon:'settings-outline',
      name: 'Ajustes',
      redirecTo: '/ajustes'
    }, 
    

  ]

  constructor() {}

  goIG() {
    window.location.href='http://www.instagram.com/g0lden_weed';
}
}
