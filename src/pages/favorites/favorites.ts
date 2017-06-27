import { Component } from '@angular/core';
import { ModalController, ToastController } from 'ionic-angular';
import * as localforage from "localforage";
import { PlacePage } from "../place/place";
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  private favoritesStore: any;
  private favorites: any = [];
  private deleteButtonWasPressed: boolean = false;


  constructor(
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

  onShowPlace(place: any) {
    if (!this.deleteButtonWasPressed) {
      const placeModal = this.modalCtrl.create(PlacePage, place['data']);
      placeModal.present();
    }
  }

  async onDeleteFavorite(place: any) {
    try {
      this.deleteButtonWasPressed = true;
      await this.favoritesStore.removeItem(place['data'].C6);
      const index: number = this.favorites.indexOf(place);
      this.favorites.splice(index, 1);
      this.showToast('Badplatsen togs bort', 'success-toast');
      this.deleteButtonWasPressed = false;
    }
    catch (error) {
      this.showToast('Ett fel uppstod när badplatsen skulle tas bort. Var god försök igen.', 'error-toast');
    }
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
