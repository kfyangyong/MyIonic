import { Component, OnInit } from '@angular/core';

import { ViewChild } from '@angular/core';
import { NavController,IonContent} from '@ionic/angular';

import { HomedetialPage } from '../pages/homedetial/homedetial.page'
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  public form:any[]=[ 
    {
      "val":"python",
      'isChecked':true
    }, 
    {
      "val":"js",
      'isChecked':false
    },
    {
      "val":"oc",
      'isChecked':false
    },
    {
      "val":"c++",
      'isChecked':true
    },
    {
      "val":"swift",
      'isChecked':true
    }
  ]

  public timestr:any
  public user={
    img:'../../assets/icon/favicon.png'
  }

  @ViewChild(IonContent) content:IonContent;

  constructor() {

  }

  ngOnInit() {
    // this.header.navTitle = '我是首页'
    
  }



  //关于scrooll 的事件

  // <!-- <ion-content
  // [scrollion-content　事件(Events)]="true"
  // (ionScrollStart)="logScrollStart()"
  // (ionScroll)="logScrolling($event)"
  // (ionScrollEnd)="logScrollEnd($event)">
  //  ion-content> -->

  logScrollStart() {
    console.log("logScrollStart 被触发")
  }

  logScrolling(e) {
    console.log("logScrolling 被触发",e)
  }
  logScrollEnd(e) {
    console.log("logScrollEnd 被触发",e)
  }

  scrollToTop() {
    console.log("关于多选",this.form);
    console.log("关于 content",this.content);
    console.log("this timestr 时间戳",this.timestr);
    console.log("this timestr 时间戳 valueOf ",this.timestr.valueOf());

    let time = new Date();
    console.log("this time ",time.valueOf());
    let times = this.formatDate(time)
    console.log("this time formatDate ",times);

    this.content.scrollToTop(0);
  }


 formatDate(now) { 
    var year=now.getFullYear(); 
    var month=now.getMonth()+1; 
    var date=now.getDate(); 
    var hour=now.getHours(); 
    var minute=now.getMinutes(); 
    var second=now.getSeconds(); 
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second; 
  } 

  nextpage() {
    let homedetialPage:HomedetialPage
    // NavController.router.push(homedetialPage)
  }


}
