import { Component } from '@angular/core';
import { MapPage } from "../map/map";
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private mapPage: any = MapPage;
  private aboutPage: any = AboutPage;


  constructor() {}

}
