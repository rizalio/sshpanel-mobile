import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";

/**
 * Generated class for the DefaultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-default',
  templateUrl: 'default.html',
})
export class DefaultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
      storage.get('user').then(user => {
        if(null == user) {
          console.log('Not Logged In');
        }
        else
        {
           navCtrl.setRoot(HomePage);
        }
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefaultPage');
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }


}
