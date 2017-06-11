import { Component } from '@angular/core';
import {ModalController, NavController, NavParams, ToastController } from 'ionic-angular';
import * as localforage from "localforage";
import { PlacePage } from "../map/place/place";
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  private favoritesStore: any;
  private favorites: any = [];


  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private modalCtrl: ModalController,
    private statusBar: StatusBar,
    private toastCtrl: ToastController) {

    this.setFavoritesStore();
    this.listFavorites();
  }

  setFavoritesStore() {
    this.favoritesStore = localforage.createInstance({ name: "badplatser", storeName: 'favorites' });
  }

  listFavorites() {
    this.favoritesStore.iterate(value => {
      this.favorites.push(JSON.parse(value));
    });
  }

  onShowPlace(placeData: any) {
    const placeModal = this.modalCtrl.create(PlacePage, placeData['data']);
    placeModal.present();
  }

  async onDeleteFavorite(placeData: any) {
    try {
      await this.favoritesStore.removeItem(placeData['data'].Badplats);
      this.showToast('Badplatsen togs bort', 'success-toast');
      this.resetAndRefresh();
    }
    catch (error) {
      this.showToast('Ett fel uppstod när badplatsen skulle tas bort. Var god försök igen.', 'error-toast');
    }
  }

  resetAndRefresh() {
    this.favorites = [];
    this.listFavorites();
  }

  showToast(message: string, css: string) {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: message,
      duration: 5000,
      position: 'top',
      cssClass: css
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

}
