import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homedetial',
  templateUrl: './homedetial.page.html',
  styleUrls: ['./homedetial.page.scss'],
})
export class HomedetialPage implements OnInit {

  constructor() { }


  // 生命周期
  ngOnInit() {
    console.log("生命周期 ngOnInit")
  }
  
  ionViewWillEnter(){
    console.log("生命周期 ionViewWillEnter")
  }

  ionViewDidEnter(){
    console.log("生命周期 ionViewDidEnter")
  }


  ionViewWillLeave(){
    console.log("生命周期 ionViewWillLeave")
  }
  
  ionViewDidLeave(){
    console.log("生命周期 ionViewDidLeave")
  }

  ngOnDestroy(){
    console.log("生命周期 ngOnDestroy")
  }


}
