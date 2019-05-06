import { Component, OnInit } from '@angular/core';

import { NavController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-my',
  templateUrl: './my.page.html',
  styleUrls: ['./my.page.scss'],
})
export class MyPage implements OnInit {


  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { 

  }

  ngOnInit() {
    
  }

  goToMyabout() {
    this.navCtrl.navigateForward('mydetail');
  }

  goToMyset() {
    this.navCtrl.navigateForward('myset');
  }

  loginIn() {
    this.navCtrl.navigateForward('login');
  }
  
}
