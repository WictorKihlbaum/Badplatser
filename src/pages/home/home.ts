import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from "../map/map";
import { SearchPage } from "../search/search";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private mapPage: any = MapPage;


  constructor() {}

}
