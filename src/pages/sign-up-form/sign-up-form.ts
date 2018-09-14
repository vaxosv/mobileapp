import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignUpProvider } from '../../providers/sign-up/sign-up';
import { User } from '../../components/user/user';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@IonicPage()
@Component({
  selector: 'page-sign-up-form',
  templateUrl: 'sign-up-form.html',
})
export class SignUpFormPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public signup: SignUpProvider) {
  }

  //validation
  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    'email': new FormControl('', Validators.email),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ])
  })

  User = {
    username: this.form.value.username,
    email: this.form.value.email,
    password: this.form.value.password
  }

  ionViewDidLoad() {
  }


  //getters
  get username() {
    return this.form.get('username')
  }

  get email() {
    return this.form.get('email')
  }

  //functions
  log() {
    // console.log(this.form);
    // console.log(firebase);

  }
  register() {
  }

}