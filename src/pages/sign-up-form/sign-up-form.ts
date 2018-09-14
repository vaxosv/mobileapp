import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignUpProvider } from '../../providers/sign-up/sign-up';
import { User } from '../../components/user/user';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';


@IonicPage()
@Component({
  selector: 'page-sign-up-form',
  templateUrl: 'sign-up-form.html',
})
export class SignUpFormPage {
  constructor(
    public afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
    public signup: SignUpProvider
  ) {
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
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
      }

  }
}