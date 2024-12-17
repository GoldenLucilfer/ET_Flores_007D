import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

  usuarioForm: FormGroup;
 
  constructor(private menucontroller: MenuController,
              private authservice:AuthService,
              private formBuilder: FormBuilder,
              private http: HttpClient) {
                this.usuarioForm = this.formBuilder.group({
                username: ['', [Validators.required]],
                email: ['', [Validators.required, Validators.email]]
              });     
            }
  
            ngOnInit() {
              // Cargar los datos del sessionStorage
              const storedUsername = sessionStorage.getItem('username');
              const storedEmail = sessionStorage.getItem('email');
          
              // Asegúrate de que existen los valores en sessionStorage antes de asignarlos
              if (storedUsername && storedEmail) {
                // Seteamos los valores en el formulario
                this.usuarioForm.setValue({
                  username: storedUsername,
                  email: storedEmail
                });
              }
            }
          
            guardarCambios() {
              if (this.usuarioForm.valid) {
                // Obtener valores del formulario
                const username = this.usuarioForm.get('username')?.value;
                const email = this.usuarioForm.get('email')?.value;
          
                // Actualizar sessionStorage con los nuevos valores
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('email', email);
          
                // Aquí enviarías la solicitud HTTP al servidor si fuera necesario
                const updatedUser = {
                  username: username,
                  email: email
                };
          
                this.http.put(`${environment.apiUrl}/1`, updatedUser) // Aquí usas el ID del usuario que quieres actualizar
                  .subscribe(response => {
                    console.log('Datos actualizados:', response);
                    // Aquí podrías mostrar una alerta o algún mensaje de éxito
                  }, error => {
                    console.error('Error al actualizar:', error);
                  });
              } else {
                console.log('El formulario no es válido');
              }
            }
  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('first');
  }
 }
