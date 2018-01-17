import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";

import { Calendar1Page } from '../pages/calendar1/calendar1'
import { Calendar2Page } from '../pages/calendar2/calendar2'

@NgModule({
  declarations: [
    MyApp,
    CalendarComponent,
    Calendar1Page,
    Calendar2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarComponent,
    Calendar1Page,
    Calendar2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CalendarComponent
  ]
})
export class AppModule {}
