import { UserPage } from './../user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
    // this.serverdata.getD()
    //   .subscribe((aa) => {
    //     this.data = aa;
    //     this.data.splice(10, 100)
    //     console.log(this.data);
    //   })
  }

  goto() {
    this.navCtrl.push(UserPage)
  }

  // ionViewDidLoad() {
  //   this.serverdata.getD()
  //     .subscribe((aa) => {
  //       this.data = aa;
  //       this.data.splice(10, 100)
  //       console.log(this.data);
  //     })
  // }
}
