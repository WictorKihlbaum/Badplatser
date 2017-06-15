import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlacesService {

  constructor(public http: Http) {}

  getPlacesData() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/data/places.json')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject();
        });
    });
  }

}