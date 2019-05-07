import { Component, OnInit } from '@angular/core';

import { BluetoothLE } from '@ionic-native/bluetooth-le/ngx';
import { Platform } from '@ionic/angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';


@Component({
  selector: 'app-blooth',
  templateUrl: './blooth.page.html',
  styleUrls: ['./blooth.page.scss'],
})
export class BloothPage implements OnInit {

  constructor(
    private bluetoothSerial: BluetoothSerial,
    public bluetoothle: BluetoothLE, 
    public plt: Platform
  ) { 

    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      this.bluetoothle.initialize()

      
    });
  


  }

  ngOnInit() {
  }

}
