import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from "ionic-angular";

@Injectable()
export class PlacesService {

  private apiKey: string = 'AIzaSyA6JMwgZ4S9qXMinDYU5oVLgQ3Oss9MfuI';
  private cors: string = 'https://cors-anywhere.herokuapp.com/';


  constructor(public http: Http, private platform: Platform) {
    // Desktop developing purpose.
    if (platform.is('ios') || platform.is('android')) {
      this.cors = ''; // Cors is not needed on mobile devices.
    }
  }

  getPlacesData() {
    return this.fetchJSON('assets/data/places.json');
  }

  getUserAddress(latitude: number, longitude: number) {
    // const url: string = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.apiKey}`
    const url = 'assets/data/address.json';
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