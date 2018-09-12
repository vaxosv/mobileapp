import { UserPage } from './../pages/user/user';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FetchdataProvider } from '../providers/fetchdata/fetchdata';
import { HttpClientModule } from '@angular/common/http';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignUpFormPage } from '../pages/sign-up-form/sign-up-form';
import { PostsComponent } from '../components/posts/posts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpProvider } from '../providers/sign-up/sign-up';
import * as firebase from 'firebase'


var config = {
  apiKey: "AIzaSyAlcjdCQWVzYg7377vFj9Jf48clvEgcfAQ",
  authDomain: "fir-aa424.firebaseapp.com",
  databaseURL: "https://fir-aa424.firebaseio.com",
  projectId: "fir-aa424",
  storageBucket: "fir-aa424.appspot.com",
  messagingSenderId: "9785689179"
};
firebase.initializeApp(config);



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    WelcomePage,
    SignUpFormPage,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    WelcomePage,
    SignUpFormPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FetchdataProvider,
    SignUpProvider
  ]
})
export class AppModule {}
