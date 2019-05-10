import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BluetoothLE } from '@ionic-native/bluetooth-le';
import { timeout } from 'q';

@Component({
  selector: 'app-blooth',
  templateUrl: './blooth.page.html',
  styleUrls: ['./blooth.page.scss'],
})

export class BloothPage implements OnInit {

  public bleState:Boolean = false
  public bleList:any[] = []
  public peripheral:any
  public bleId:any
  public ble = BluetoothLE

  constructor(
    public plt: Platform 
  ) { 
    this.plt.ready().then((readySource) => {
    
      console.log('Platform ready from readySource ==', readySource);
      this.ble.initialize().subscribe(data => {
       if(data.status === 'disabled'){
          alert("请先开启蓝牙搜索")
          this.bleState = false;
       }else{
        this.bleState = true;
       }
      })
    });
  }

  ngOnInit() {
    
    //getAdapterInfo检索有用的信息，例如地址，名称和各种状态（初始化，启用，扫描，可发现）。
    //当适配器的一般状态丢失时，这可能非常有用，否则我们需要通过一系列回调来获得正确的状态（首先初始化，然后启用，然后扫描，等等）。
    //这种方法的结果使我们能够在避免大部分回调地狱的同时做出业务逻辑决策。
    // this.ble.getAdapterInfo()
    // .then(info => {
    //   console.log('getAdapterInfo ble ',info)
    // })

    //不知道 用途
    // this.ble.hasPermission().then(permission =>{
    //   alert('允许蓝牙访问'+ permission)
    // }).catch(err =>{
    //   alert("no Permission" + err)
    // })    
    this.startSearchBle()
    
  }


  bleIsOpen(){
    
  }

  initBle() {
    
  }

  startSearchBle() {
    let params = {}
    this.ble.startScan(params)
    .subscribe(info => {

      //address: "2F26E82D-30E0-7D2D-9579-C918383015AA"
      //advertisement: {solicitedServiceUuids: [], overflowServiceUuids: [], isConnectable: 1, serviceData: {}, serviceUuids: []}
      //name: null
      //rssi: 127
      //status: "scanResult"

      console.log('startScan ble ',info.name, info.address)
      if(info.name !== null && info.name !== undefined){
        let peripheral = {...info,dis:''}
        peripheral.dis = Math.pow(10, (Math.abs(info.rssi) - 59) / (10 * 2.0)).toFixed(1)
        this.bleList.push(peripheral)
      }
      
    })

    setTimeout(() => {
      console.log("ble list",this.bleList)
      this.stopSearchBle()
    }, 10000)

  }

  stopSearchBle() {
    this.ble.isScanning()
    .then(data =>{
      if(data.isScanning){
        console.log("stopSearchBle")
        this.ble.stopScan()
        .then(info =>{
          console.log('stopScan info',info)
        })
      }
    })
  }

  goConnectBle(key) {
    this.stopSearchBle()
    let peripheral = this.bleList[key];

    // this.ble.wasConnected(peripheral.address)
    // .then(info => {
    //   console.log("wasConnected info",info)

    //   this.ble.disconnect(peripheral.address)
    //   return;
    // })
      
    let params ={
      address: peripheral.address,
      autoConnect: true
    } 
    this.ble.connect(params)
    .subscribe(info =>{
      console.log('connect info',info)
      if(info.status === "connected"){
        alert('设备已连接')    
        peripheral.connected = true;

        if(this.plt.is("ios")){
          this.serviceBle(peripheral)
        }
        if(this.plt.is("android")){
          this.discoverBle(peripheral.address)
        }
      }else{
        alert('设备已连接 失败')
      }
    })

  }

  discoverBle(address) {
    let params ={
      address:address
    } 
    this.ble.discover(params).then(info => {
      console.log('discoverBle info',info)
      let services = info.services
      let service = services[0]
      this.characteristicsBle(service,address)
    })
  }


  //only ios
  serviceBle(peripheral) {
    let params ={
      address: peripheral.address,
    } 
    this.ble.services(params)
    .then(info => {
      console.log('services info',info)
      let services = info.services
      let service = services[1]
      this.characteristicsBle(service,peripheral.address)
    })
  }

  //only ios
  descriptorsBle(){
   
  }


  //only ios 
  characteristicsBle(service,address) {
    let params ={
      address:address,
      service: service, 
      characteristics: [] 
    }
    console.log("characteristicsBle params",params)

    this.ble.characteristics(params)
    .then(info =>{
      console.log("characteristics info",info)
      console.log("characteristics params",params)
      console.log("characteristics params",service)

      let serviceUuid = service
      let characteristics = {...info.characteristics}
      console.log("characteristics ",characteristics , typeof(characteristics))
      for (const key in characteristics) {
        let characteristic = characteristics[key]
        let properties = characteristic.properties
        this.notifyBle(serviceUuid,characteristic.uuid)
        this.writeBle(address,serviceUuid,characteristic.uuid)
        this.getBleData(address,serviceUuid,characteristic.uuid)
      }
    
    }).catch(err => {
      console.log('characteristics err',err)
    })
  }

  notifyBle(service,characteristicUuid) {
    
    let params = {
      "service":service,
      "characteristic":characteristicUuid,
      "value":''
    };
    
    this.ble.notify(params)
    .then(info => {
        console.log("notify info",info)
    }).catch(err => {
      console.log('notify err',err)
    })
  }

  writeBle(address,serviceUuid,characteristicUuid) {
    // var data: number[]
    // data[0] = 0x78 // 'x'
    // data[1] = 0x70 // 'p'
    // data[2] = 0x01 // version
    // data[3] = 0x05 // length
    // data[4] = 0x01 // start sensor
    var string = "xp : ";
    var bytes = this.ble.stringToBytes(string);
    var encodedString = this.ble.bytesToEncodedString(bytes);

    // let info = new Uint8Array([0x78,0x70,0x01,0x05,0x01])
    // var encodedString = this.ble.bytesToEncodedString(info);   
    let params = {
      address:address,
      service:serviceUuid,
      characteristic:characteristicUuid,
      value:encodedString
    }
    console.log("writeBle ", params)
    this.ble.write(params)
    .then(info => {
      console.log("write info",info)
      this.getBleData(address,serviceUuid,characteristicUuid)
    }) 
    .catch(err => {
      console.log("write err",err)
    })

  }

  getBleData(address,serviceUuid,characteristicUuid) {
    let params ={
      address:address,
      service: serviceUuid, 
      characteristic: characteristicUuid 
    }
    console.log("getBleData ", params)
    this.ble.read(params)
    .then(info => {
      console.log("read info",info)

    })
    .catch(err => {
      console.log("read err",err)
    })
  }

  disconnectBle(address) {
    let params ={
      address: address
    } 
    this.ble.disconnect(params)
    .then(info =>{
      console.log('disconnect info',info)
      alert('设备已断开')
    })
  }


  


}
