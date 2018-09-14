import { UserPage } from './../user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase'

import { FetchdataProvider } from '../../providers/fetchdata/fetchdata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data: any;
  constructor(public navCtrl: NavController, public serverdata: FetchdataProvider) {

  }

  login() {

  }

  goto() {
    this.navCtrl.push(UserPage)
  }

}
