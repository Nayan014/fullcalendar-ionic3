import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Calendar1Page } from '../calendar1/calendar1'
import { Calendar2Page } from '../calendar2/calendar2'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  nevagiateToPage(pageName){
    if(pageName == 'Calendar1Page')
    this.navCtrl.push(Calendar1Page);
    else if(pageName == 'Calendar2Page')
    this.navCtrl.push(Calendar2Page);
  }

}
