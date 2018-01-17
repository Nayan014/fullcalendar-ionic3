Source:
https://www.npmjs.com/package/angular2-fullcalendar

      $ npm install ap-angular2-fullcalendar --save

Copy fullcalendar.min.css form 'assets/fullcalender'
also include in index.html

Note:

We are using Calendar on two pages, and if we declare 
      import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";
on both page module then will get

      Error: Type CalendarComponent is part of the declarations of 2 modules: EventCalendarPageModule and PointOfSalePageModule! Please consider moving CalendarComponent to a higher module that imports EventCalendarPageModule and PointOfSalePageModule.

Source: https://github.com/ionic-team/ionic/issues/12333    <br />

So we are not lazy loading our page and will declear in app.module.ts
and also import 
      import {CalendarComponent} from "ap-angular2-fullcalendar/src/calendar/calendar";


================================================<br />
$ ionic info


cli packages:

    @ionic/cli-utils  : 1.19.0
    ionic (Ionic CLI) : 3.19.0

global packages:

    cordova (Cordova CLI) : 7.1.0

local packages:

    @ionic/app-scripts : 3.1.6
    Cordova Platforms  : none
    Ionic Framework    : ionic-angular 3.9.2

System:

    Android SDK Tools : 26.1.1
    Node              : v6.11.5
    npm               : 5.5.1
    OS                : Windows 10

Misc:

    backend : pro

================================================