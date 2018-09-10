import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignUpProvider } from '../../providers/sign-up/sign-up';

/**
 * Generated class for the SignUpFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up-form',
  templateUrl: 'sign-up-form.html',
})
export class SignUpFormPage {
  private user;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public signup: SignUpProvider) {
    
  }

  ionViewDidLoad() {
  }

  register(){
    // this.navCtrl.push(HomePage)
  }

  log(e){
    console.log(e);
    console.log('dadas');
    
  }
  submit(f){

    if (f.value.password !== f.value.password2) {
      console.log('error password did not metch');
      
    }
    this.user = new User(
      f.value.username,
      f.value.email,
      f.value.password
    )

    this.signup.sendata(this.user)

    console.log(f.value);
    
  }
}


class User {
  constructor(
    public username: number,
    public email: string,
    public password: string,
  ) {
    
  }
}