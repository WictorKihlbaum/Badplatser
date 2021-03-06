import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from 'ionic-angular';

@Injectable()
export class WeatherService {

  private cors: string = 'https://cors-anywhere.herokuapp.com/';
  private apiUrl: string = 'https://api.darksky.net/forecast/InsertAPIkey';


  constructor(private http: Http, private platform: Platform) {
    // Desktop developing purpose.
    if (platform.is('ios') || platform.is('android')) {
      this.cors = ''; // Cors is not needed on mobile devices.
    }
  }

  fetchWeather(latitude, longitude) {
    const url = `${this.cors + this.apiUrl}/${latitude},${longitude}?lang=sv&units=si&exclude=flags,currently`;
    return this.fetchJSON(url);
  }

  fetchSeaTemperature() {
    const url = 'https://opendata-download-ocobs.smhi.se/api/version/latest/parameter/5/station-set/all/period/latest-hour/data.json';
    return this.fetchJSON(url);
  }

  fetchJSON(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject();
        });
    });
  }

}
