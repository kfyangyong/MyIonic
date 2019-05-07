import { Component, OnInit } from '@angular/core';

//跳转路由 get 传值
import {ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-messagedetail',
  templateUrl: './messagedetail.page.html',
  styleUrls: ['./messagedetail.page.scss'],
})
export class MessagedetailPage implements OnInit {

  public message:any
  
  constructor(
    public router:ActivatedRoute
  ) { }

  ngOnInit() {
      console.log('详情接收值 this.router',this.router.queryParams)
      this.router.queryParams.subscribe((data)=>{
        this.message = data
        console.log('详情接收值 data',data)

      })
  }

}
