import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-myset',
  templateUrl: './myset.page.html',
  styleUrls: ['./myset.page.scss'],
})
export class MysetPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { }
  
  ngOnInit() {

  }

  goToMyabout() {
    this.navCtrl.navigateForward('mydetail');
  }
}
