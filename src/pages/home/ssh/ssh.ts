import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the SshPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ssh',
  templateUrl: 'ssh.html',
})
export class SshPage {

  users: any = [];
  user: any;
  endpoint: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public loading: LoadingController, public http: Http) {
    storage.get('endpoint').then(endpoint => {
      this.endpoint = endpoint;
    });  
    storage.get('user').then(user => {
      this.user = user;
    });
  }


  ionViewDidLoad() {
    console.log('Loaded!');
    this.getSSHUser();

  }

  getSSHUser() {

  	// console.log(this.endpoint);
  	// console.log(this.user);

    let loader = this.loading.create({
      content: 'Mengambil data..'
    });

    loader.present().then(() => {
      this.storage.get('user').then(user => {
        this.storage.get('endpoint').then(endpoint => {
          let headers = new Headers;
          headers.append('Authorization', 'Bearer ' + user.api_token);
          headers.append('Content-Type', 'application/json');

          this.http.get(endpoint + 'ssh', {headers: headers}).map(res => res.json()).subscribe(
            data => {
              console.log('Request successfuilly processed!');
              console.log(data);
              this.users = data.details;
              loader.dismiss();
            },
            err => {
              console.log('Request failed!');
              console.log(err);
              loader.dismiss();
            }
          );
        });
      });
    });

  	
  }

  isExists() {

  }

}
