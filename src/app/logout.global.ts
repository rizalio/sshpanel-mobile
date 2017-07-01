import { Directive, ElementRef, HostListener } from '@angular/core';
import { Storage } from '@ionic/storage';
import {AlertController, LoadingController, NavController, ToastController} from 'ionic-angular';
import {DefaultPage} from "../pages/default/default";


@Directive({
  selector: '[logoutGlobal]'
})
export class logoutGlobal {

  ctrl = null;

  constructor(private el: ElementRef, public storage: Storage, public navCtrl: NavController, public loading: LoadingController, public alertCtrl: AlertController, public toast: ToastController) {


  }
  @HostListener('click') onClick() {
    this.ctrl = this;
    let data = this.ctrl;

    setTimeout(function(){
      data.storage.remove('user');
      data.navCtrl.setRoot(DefaultPage);
      data.toast.create({
        message: 'Berhasil Logout',
        duration: 3000,
        position: 'bottom'
      }).present();



    }, 2000);
    this.loading.create({
      content: 'Sedang Logout',
      duration: 2000
    }).present(), data;


  }
}
