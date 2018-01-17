import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-calendar2',
  templateUrl: 'calendar2.html',
})
export class Calendar2Page {
  calendarOptions :any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Calendar2Page');
  }

  initializeCalendarOptions(){
   
    this.calendarOptions = {
      header: {
        left: 'title',
        right: 'month,agendaWeek,agendaDay,agendaFourDay,'
      },
      footer: {
        right: 'today prev,next',   
      },
      views: {
        agendaFourDay: {
            type: 'listYear',
            buttonText: 'All'
        }
      },
   //   theme:'jquery-ui',
      height: 450,
      fixedWeekCount : false,
      defaultDate: Date(),
      editable: true,
      allDay : true,
      dayClick: function(date, jsEvent, view, resourceObj) {
       console.log('Date: ' + date.format());
      },
      eventLimit: true, // allow "more" link when too many events
      events : [
        {
          title: 'All Day Event',
          start: new Date(),
          end: new Date(),
        },
        {
          title: 'Long Event',
          start: '2016-09-07',
          end: '2016-09-10'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-09T16:00:00'
        },
        {
          id: 999,
          title: 'Repeating Event',
          start: '2016-09-16T16:00:00'
        },
        {
          title: 'Conference',
          start: '2016-09-11',
          end: '2016-09-13'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T10:30:00',
          end: '2016-09-12T12:30:00'
        },
        {
          title: 'Lunch',
          start: '2016-09-12T12:00:00'
        },
        {
          title: 'Meeting',
          start: '2016-09-12T14:30:00'
        },
        {
          title: 'Happy Hour',
          start: '2016-09-12T17:30:00'
        },
        {
          title: 'Dinner',
          start: '2016-09-12T20:00:00'
        },
        {
          title: 'Birthday Party',
          start: '2016-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2016-09-28'
        }
      ],
      eventClick: function(calEvent, jsEvent, view) {
              localStorage.setItem( 'EventData', calEvent.title );
              window.location.assign('#/result')
            }
    };  
  }


}
