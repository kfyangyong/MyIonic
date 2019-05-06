import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ){ }

  ngOnInit() {
  }

  login(){
    console.log("login click")
  }

  goToRegister(){
    console.log("goToRegister click")
    this.navCtrl.navigateForward("register")
  }

  forgotPass(){
    console.log("forgotPass click")

  }

  goBack(){
    console.log("goBack click")
    this.navCtrl.back()
  }

}
