import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-station',
  templateUrl: 'station.html',
})
export class StationPage {

  private name: string;
  private temperature: string = 'Ingen data tillgänglig';


  constructor(private navParams: NavParams) {
    this.name = navParams.get('name');
    const temperature = navParams.get('value')[0];

    if (temperature != null) {
      this.temperature = parseInt(temperature.value).toString() + '°';
    }
  }

}
