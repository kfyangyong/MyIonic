import { Component, OnInit, Input} from '@angular/core';

import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-myabout',
  templateUrl: './myabout.page.html',
  styleUrls: ['./myabout.page.scss'],
})
export class MyaboutPage implements OnInit {

  @Input() value: number;

  constructor(navParams: NavParams) { }

  ngOnInit() {
  }

}
