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

  public bleState:Boolean = false
  public bleList:any[] = []

  constructor(
    private bleSerial: BluetoothSerial,
    public ble: BluetoothLE, 
    public plt: Platform
  ) { 

  }

  ngOnInit() {
    this.bleIsOpen()
    if(this.bleState){
      this.initBle()
    }
  }


  bleIsOpen(){
    this.bleSerial.isEnabled()
    .then(date=>{
      this.bleState = true;
    }).catch(()=>{
      this.bleState = true;
    });
  }

  initBle() {
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      //  this.ble.initialize()
      console.log(this.ble.initialize())
    });
  }

  startSearchBle() {
    // this.ble.startScan()
  }

  stopSearchBle() {

  }

  goConnectBle(key) {

  }

  getBleData(){
    
  }


}
