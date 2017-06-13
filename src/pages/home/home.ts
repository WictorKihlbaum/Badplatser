import { Component, OnInit } from '@angular/core';
import { MapPage } from "../map/map";
import { AboutPage } from "../about/about";
import { FavoritesPage } from "../favorites/favorites";
import * as localforage from "localforage";
import { Network } from "@ionic-native/network";
import { ToastController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private mapPage: any = MapPage;
  private aboutPage: any = AboutPage;
  private favoritesPage: any = FavoritesPage;
  private toast: any;


  constructor(
    private network: Network,
    private toastCtrl: ToastController,
    private statusBar: StatusBar) {

    /*
    let favoritesStore = localforage.createInstance({ name: "badplatser", storeName: 'favorites' });
    favoritesStore.clear().then(() => {
      console.log('allt clear');
    });
    */
  }

  ngOnInit() {
    this.setupNetworkWatchers();
  }

  setupNetworkWatchers() {
    // Network connection is down.
    this.network.onDisconnect().subscribe(() => {
      this.showToast('Internetanslutning förlorad. Var god återanslut för att kunna hämta väderdata.', 'error-toast');
    });
    // Network connection is up. Dismiss error toast.
    this.network.onConnect().subscribe(() => {
      this.toast.dismiss();
    });
  }

  showToast(message: string, css: string) {
    this.statusBar.hide();
    this.toast = this.toastCtrl.create({
      message: message,
      showCloseButton: true,
      closeButtonText: 'Ok',
      position: 'top',
      cssClass: css
    });
    this.toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    this.toast.present();
  }

}
