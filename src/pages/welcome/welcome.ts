import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignUpFormPage } from '../sign-up-form/sign-up-form';
import * as firebase from 'firebase'
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  loadLogin(){
    this.navCtrl.push(HomePage)
    
  }

  loadSignUp(){
    this.navCtrl.push(SignUpFormPage)
  }


}