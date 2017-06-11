import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as localforage from "localforage";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  private favoritesStore: any;
  private favorites: any = [];


  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.setFavoritesStore();
    this.listFavorites();
  }

  setFavoritesStore() {
    this.favoritesStore = localforage.createInstance({ name: "badplatser", storeName: 'favorites' });
  }

  listFavorites() {
    this.favoritesStore.iterate(value => {
      this.favorites.push(JSON.parse(value).data['Badplats']);
    });
  }

}
