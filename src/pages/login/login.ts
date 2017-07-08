import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  creds = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController, public http: Http, public loading: LoadingController) {
    //
  }

  login() {
    // perform auth
    let http = this.http;
    let alert = this.alertCtrl;

    let param = {
        email: this.creds['email'],
        password: this.creds['password']
    };

    let loader = this.loading.create({
      content: "Sedang login..."
    });

    loader.present().then(() => {
      http.post('https://' + this.creds['endpoint'] + '/api/v1/private/login', param).map(res => res.json()).subscribe(
        data => {
          console.log(data.details.details);
          // insert data into storage

          this.storage.set('user', data.details.details);
          this.storage.set('endpoint', 'https://' + this.creds['endpoint'] + '/api/v1/');

          this.navCtrl.setRoot(HomePage);
          loader.dismiss();
        },
        err => {
          if(err.json().code == 401) {
            alert.create({
              title: 'Oops!',
              subTitle: 'Email atau password salah.',
              buttons: ['Ok']
            }).present();
          }

          if(err.statusText == "") {
            alert.create({
              title: 'Oops!',
              subTitle: 'Perika kembali endpoint & koneksi internet anda.',
              buttons: ['Ok']
            }).present();
          }

          loader.dismiss();

        }
      );
    });

  }

}
