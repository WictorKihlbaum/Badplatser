import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Platform } from "ionic-angular";

@Injectable()
export class PlacesService {

  private googleApiKey: string = 'AIzaSyA6JMwgZ4S9qXMinDYU5oVLgQ3Oss9MfuI';
  private cors: string = 'https://cors-anywhere.herokuapp.com/';
  private counties: any = ['blekinge', 'dalarna', 'gotland', 'gävleborg', 'halland', 'jämtland', 'jönköping', 'kalmar', 'kronoberg', 'norrbotten', 'skåne', 'stockholm', 'södermanland', 'uppsala', 'värmland', 'västerbotten', 'västernorrland', 'västmanland', 'västra götalands', 'örebro', 'östergötland'];


  constructor(public http: Http, private platform: Platform) {
    // Desktop developing purpose.
    if (platform.is('ios') || platform.is('android')) {
      this.cors = ''; // Cors is not needed on mobile devices.
    }
  }

  async getUserCounty(latitude: number, longitude: number) {
    const userAddress: any = await this.getUserAddress(latitude, longitude);
    const components: any = userAddress['results'][0].address_components;
    // Find county
    const component = components.find(x => x.types[0] == 'administrative_area_level_1');
    if (component) {
      for (let county of this.counties) {
        if (component.long_name.toLowerCase().includes(county)) {
          return county;
          //const index: number = this.counties.indexOf(county);
          //return this.fetchJSON(`assets/data/counties/${index}.json`);
        }
      }
    }
    return null;
  }

  getUserAddress(latitude: number, longitude: number) {
    const url: string = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.googleApiKey}`;
    //const url = 'assets/data/address.json';
    return this.fetchJSON(url);
  }

  getPlacesData() {
    return this.fetchJSON(`assets/data/places.json`);
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