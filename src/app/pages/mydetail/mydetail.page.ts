import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mydetail',
  templateUrl: './mydetail.page.html',
  styleUrls: ['./mydetail.page.scss'],
})
export class MydetailPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { }
  ngOnInit() {
  }

  goToMy() {
    
  }

}
