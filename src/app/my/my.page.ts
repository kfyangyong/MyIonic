import { Component, OnInit } from '@angular/core';


import { ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

//MenuController
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-my',
  templateUrl: './my.page.html',
  styleUrls: ['./my.page.scss'],
})
export class MyPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private menu: MenuController) { 
   
  }

  public data:any[]=[]

  ngOnInit() {
    for(let i=0; i<200; i++){
      let str = "这是第"+i
      this.data.push(str)
    }
  }



  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


  //menu
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
