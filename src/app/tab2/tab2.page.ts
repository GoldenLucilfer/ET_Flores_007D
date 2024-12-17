import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApicrudService } from '../services/apicrud.service';
import { Users } from '../interfaces/users';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  usuarios: Users[]=[];

  constructor(private menucontroller: MenuController,
              private apicrud:ApicrudService
  ) {}
  ngOnInit(){
    this.apicrud.getUsuarios().subscribe((data)=>{
      this.usuarios = data;
    })
    
  }
  mostrarMenu(){
    this.menucontroller.enable(true);
    this.menucontroller.open('first');
  }

}
