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

  async getGoogleReviews(latitude: any, longitude: any, name: any) {
    const url = `${this.cors}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=10000&keyword=${name}&key=${this.apiKey}`;
    const results = await this.fetchJSON(url);

    for (let result of results['results']) {
      if (name.match(result.name) && result.hasOwnProperty('rating')) {
        return this.getPlaceDetails(result);
      }
    }
  }

  async getPlaceDetails(result: any) {
    const url = `${this.cors}https://maps.googleapis.com/maps/api/place/details/json?placeid=${result.place_id}&key=${this.apiKey}`;
    return await this.fetchJSON(url);
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