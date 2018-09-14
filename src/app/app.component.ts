import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { UserPage } from '../pages/user/user';
import { SignUpFormPage } from '../pages/sign-up-form/sign-up-form';
import * as firebase from 'firebase'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  loggdin: boolean = false

  constructor(public app: App, public appCtrl: App, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (this.loggdin) {
        this.rootPage = UserPage;
      } else {
        this.rootPage = WelcomePage;
      }
      statusBar.styleDefault();
      splashScreen.hide();

    });

  }

  logout() {
    console.log('logging out');
    const root = this.app.navPop()
  }
}
