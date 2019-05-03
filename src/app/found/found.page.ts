import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { MyaboutPage } from '../pages/myabout/myabout.page';


//提示框
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-found',
  templateUrl: './found.page.html',
  styleUrls: ['./found.page.scss'],
})
export class FoundPage implements OnInit {


  //模态框 modal
  constructor(public modalController: ModalController,public toastController: ToastController) { 

  }

  ngOnInit() {
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: MyaboutPage,
      componentProps: { value: 123 }
    });
    const { data } = await modal.onDidDismiss();
    return await modal.present();
  }

  //tab
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  //slider
  // ionSlideDidChange 	Emitted after the active slide has changed.
  // ionSlideDoubleTap 	Emitted when the user double taps on the slide's container.
  // ionSlideDrag 	Emitted when the slider is actively being moved.
  // ionSlideNextEnd 	Emitted when the next slide has ended.
  // ionSlideNextStart 	Emitted when the next slide has started.
  // ionSlidePrevEnd 	Emitted when the previous slide has ended.
  // ionSlidePrevStart 	Emitted when the previous slide has started.
  // ionSlideReachEnd 	Emitted when the slider is at the last slide.
  // ionSlideReachStart 	Emitted when the slider is at its initial position.
  // ionSlidesDidLoad 	Emitted after Swiper initialization
  // ionSlideTap 	Emitted when the user taps/clicks on the slide's container.
  // ionSlideTouchEnd 	Emitted when the user releases the touch.
  // ionSlideTouchStart 	Emitted when the user first touches the slider.
  // ionSlideTransitionEnd 	Emitted when the slide transition has ended.
  // ionSlideTransitionStart 	Emitted when the slide transition has started.
  // ionSlideWillChange 	Emitted before the active slide has changed.
  ionSlideDidChange() {
    console.log('ionSlideDidChange');

  }

  //提示框
  // position "bottom" | "middle" | "top" 
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Click to Close',
      showCloseButton: true,
      position: 'middle',
      closeButtonText: 'Done'
    });
    toast.present();
  }
 

}
