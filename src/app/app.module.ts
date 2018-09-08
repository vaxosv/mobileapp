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
import { FormsModule } from '@angular/forms';

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
    FormsModule
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
  ]
})
export class AppModule {}
