import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignUpProvider } from '../../providers/sign-up/sign-up';
import { User } from '../../components/user/user';

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
  public button :boolean = false;

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

  pascheck(f){
    let pas1 = f.value.password
    let pas2 = f.value.password2
    console.log(f);
    
    if (pas1 === "" || pas1 !== pas2) {
      this.button = false;
    }else{
      this.button = true;
      
    }
    console.log(f.control.controls.password2.valid);
    
  }

  submit(f){
    console.log(this.button);
    
    
    this.user = new User(
      f.value.username,
      f.value.email,
      f.value.password
    )

    this.signup.sendata(this.user)

    
  }
}


