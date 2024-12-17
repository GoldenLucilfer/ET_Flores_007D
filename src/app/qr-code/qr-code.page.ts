import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.page.html',
  styleUrls: ['./qr-code.page.scss'],
})
export class QrCodePage implements OnInit {
  event: any;
  qrData: string = '';

  constructor(private menucontroller:MenuController) {}

  ngOnInit() {}
    
  mostrarMenu(){
    this.menucontroller.open('first');
  }
}