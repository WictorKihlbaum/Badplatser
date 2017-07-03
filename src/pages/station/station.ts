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
    this.name = navParams.get('name');
    const value: any = navParams.get('value')[0];
    this.temperature = parseInt(value.value).toString() + '°';

    const milliseconds: any = value.date;
    const date: any = new Date(milliseconds);
    const day: any = date.getDate();
    const month: any = date.getMonth() + 1;
    let hours: string = date.getHours().toString();
    if (hours.length == 1) hours = '0' + hours;

    this.date = `${day}/${month} Kl. ${hours}`;
  }

}
