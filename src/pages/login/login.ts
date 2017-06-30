import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Injectable } from '@angular/core';
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

  loading = false;

  api: string = "ahdMpZQf1FXfKmGkOascnw8dDO8GrdQA7PYzsyqyTdHtpWjJAaitCyIuU8GKwo";

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController, public http: Http) {
    storage.remove('test');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goToHome() {
    this.navCtrl.push(HomePage);
  }

  login() {
    this.loading = true;
   
    // perform auth
    let http = this.http;

    let param = JSON.stringify({
        email: this.creds['email'],
        password: this.creds['password'] 
    });
    http.post('https://' + this.creds['endpoint'] + '/api/v1/private/login', param).subscribe(data => {
      console.log(data);
    });
    // success(function(data, status, headers, config) {
    //   // this callback will be called asynchronously
    //   // when the response is available
    //   console.log(data);
    // }).
    // error(function(data, status, headers, config) {
    //   // called asynchronously if an error occurs
    //   // or server returns response with an error status.
    //   let alert = this.alertCtrl.create({
    //     title: 'Oops!',
    //     subTitle: 'Email atau Password salah!',
    //     buttons: ['Oke']
    //   });
    //   alert.present();
    // });

    this.loading = false;
  }

}
