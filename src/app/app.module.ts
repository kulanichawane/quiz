import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {EnglishpagePage} from '../pages/englishpage/englishpage';
import { ResultsPage } from '../pages/results/results';
import {SportsPage } from '../pages/sports/sports';
import {GeneralPage} from '../pages/general/general'
import{ MainPage} from '../pages/main/main';
import {FinalPage} from '../pages/final/final';

@NgModule({
  declarations: [
    MyApp,
    HomePage,EnglishpagePage,ResultsPage,SportsPage,GeneralPage , MainPage,FinalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EnglishpagePage,
    ResultsPage,SportsPage ,GeneralPage, MainPage,FinalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
