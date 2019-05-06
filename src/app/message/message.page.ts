import { Component, OnInit } from '@angular/core';
import { NavController, IonContent, ToastController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  public messageList:any[] = []
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.messageList = [
      {
        title:"今日消息",
        detail:"一壶老酒敬江湖，不问岁月今是何"
      },
      {
        title:"昨日消息",
        detail:"江湖老酒涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"前日消息",
        detail:"江湖老酒🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.03.22",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.03.21",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.03.20",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.03.19",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.03.18",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.02.28",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.02.27",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.02.26",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.02.25",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.02.24",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      },{
        title:"2019.02.23",
        detail:"江湖老酒要涨价了，库存紧张，🚎订单不断，需预约订购，订单日期已经拍到2100年了，估计这辈子你是喝不上了，但是可以给你的后代备着"
      }
    ]
  }

  goToDetail(key) {
    console.log("点击了消息",key)
    this.navCtrl.navigateForward('messagedetail');
  }



}
