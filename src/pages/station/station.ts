import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-station',
  templateUrl: 'station.html',
})
export class StationPage {

  private name: string;
  private temperature: string;
  private date: string;


  constructor(private navParams: NavParams) {
    const value: any = navParams.get('value')[0];
    this.name = navParams.get('name');
    this.temperature = parseInt(value.value).toString() + '°';
    this.date = this.getDate(value.date);
  }

  getDate(milliseconds: number) {
    const date: any = new Date(milliseconds);
    const day: number = date.getDate();
    const month: number = date.getMonth() + 1;
    let hours: string = date.getHours().toString();
    if (hours.length == 1) hours = '0' + hours;

    return `${day}/${month} Kl. ${hours}`;
  }

}
