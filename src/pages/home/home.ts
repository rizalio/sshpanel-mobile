import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SshPage } from './ssh/ssh';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any;
  endpoint: any;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.storage.get('user').then(user => {
      this.user = user;
    });
    this.storage.get('endpoint').then(endpoint => {
      this.endpoint = endpoint;
    });
  }

  SSHPage = SshPage;

}
