import { Component } from '@angular/core';
import { MapPage } from "../map/map";
import { AboutPage } from "../about/about";
import { FavoritesPage } from "../favorites/favorites";
import * as localforage from "localforage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private mapPage: any = MapPage;
  private aboutPage: any = AboutPage;
  private favoritesPage: any = FavoritesPage;


  constructor() {
    /*let favoritesStore = localforage.createInstance({ name: "badplatser", storeName: 'favorites' });
    favoritesStore.clear().then(() => {
      console.log('allt clear');
    });*/
  }

}
