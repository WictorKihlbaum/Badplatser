import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-station',
  templateUrl: 'station.html',
})
export class StationPage {

  private name: string;
  private temperature: string;


  constructor(private navParams: NavParams) {
    this.name = navParams.get('name');
    const temperature = navParams.get('value')[0];

    if (temperature != null) {
      this.temperature = parseInt(temperature.value).toString() + '°C';
    } else {
      this.temperature = 'Ingen data tillgänglig';
    }
  }

}
