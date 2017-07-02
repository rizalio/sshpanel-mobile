import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user = null;

  constructor(public navCtrl: NavController, public storage: Storage) {
    storage.get('user').then(user => {
      this.user = user;
      console.log(user);
    });
  }


}
