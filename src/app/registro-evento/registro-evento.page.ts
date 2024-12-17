import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Eventos } from '../interfaces/eventos';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro-evento',
  templateUrl: './registro-evento.page.html',
  styleUrls: ['./registro-evento.page.scss'],
})
export class RegistroEventoPage implements OnInit {
  events: Eventos[] = [];
  selectedEvent: Event | null = null;
  email: string | null = null; // Aquí almacenarás el correo electrónico del usuario
  rut: string | null = null; 


  constructor(private route: ActivatedRoute, private navCtrl: NavController
            ,private menucontroller:MenuController, private authservice: AuthService){ }

            ngOnInit() {
              this.loadEvents(); // Cargar los eventos al inicializar el componente
    this.email = sessionStorage.getItem('email'); // Obtén el correo del sessionStorage
    this.rut = sessionStorage.getItem('rut'); // Obtén el RUT del sessionStorage
  }
          
            loadEvents() {
              this.authservice.getEvents().subscribe(
                (data: Eventos[]) => {
                  this.events = data; // Almacena los eventos en la variable
                },
                (error) => {
                  console.error('Error al cargar eventos', error);
                }
              );         
          }
          selectEvent(event: Event) {
            this.selectedEvent = event; // Almacena el evento seleccionado
          }
      

          
        
  irQR(){
    this.navCtrl.navigateForward('/qr-code');
  } 
  

  mostrarMenu(){
    this.menucontroller.open('first');
  }
 }

