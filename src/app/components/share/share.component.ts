import { Component, OnInit, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {

  //父子组件传值
  
  @Input() title:any

  @Input() message:any
  //方法
  @Input() run:any

  public shareStr:any = '我是分享的字符串'

  constructor() { }

  ngOnInit() {}

  getParentMsg() {
    console.log("获取到父组件的msg",this.message)
  }

  getParentRun() {
    console.log("获取到父组件的run")
    this.run()
  }

  //供父组建调用
  doChildrenRun(){
    alert("doChildrenRun on click")
  }

}
