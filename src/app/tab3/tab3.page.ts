import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../interfaces/users';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  usuarios: User[]=[];
  
  constructor(private menucontroller: MenuController,
              private authservice:AuthService,
              private http: HttpClient, private router:Router){}

  ngOnInit() {
                
  }
              
  logout() {
    this.authservice.logout();
  }
  
  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('first');
  }
 }

