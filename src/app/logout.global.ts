import { Directive, ElementRef, HostListener } from '@angular/core';
import { Storage } from '@ionic/storage';
import {AlertController, LoadingController, NavController} from 'ionic-angular';
import {DefaultPage} from "../pages/default/default";


@Directive({
  selector: '[logoutGlobal]'
})
export class logoutGlobal {

  ctrl = null;

  constructor(private el: ElementRef, public storage: Storage, public navCtrl: NavController, public loading: LoadingController, public alertCtrl: AlertController) {


  }
  @HostListener('click') onClick() {
    this.ctrl = this;
    let data = this.ctrl;

    setTimeout(function(){
      data.storage.remove('user')
      data.alertCtrl.create({
        title: 'Sukses!',
        subTitle: 'Berhasil Logout',
        buttons: ['OK']
      });
      data.navCtrl.setRoot(DefaultPage);
    }, 2000);
    this.loading.create({
      content: 'Sedang Logout'
    }).present(), data;


  }
}
