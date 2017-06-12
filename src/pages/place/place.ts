import { Component, OnInit } from '@angular/core';
import {LoadingController, NavParams, ToastController } from 'ionic-angular';
import { WeatherService } from "../../providers/weather-service";
import * as localforage from "localforage";
import { StatusBar } from "@ionic-native/status-bar";
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
  providers: [WeatherService]
})
export class PlacePage implements OnInit {

  private loader: any;
  private favoritesStore: any;
  private favoriteIsSaved: boolean = false;

  // Place data
  private placeName: string;
  private latitude: string;
  private longitude: string;
  private county: string;
  private commune: string;
  private classification: string;
  private euBath: string;
  private year: string;

  /* WEATHER DATA */

  // Currently
  private temperature: string;
  private summary: string;
  private icon: string;

  // Hourly
  private weatherByHours: any = [];


  constructor(
    private navParams: NavParams,
    private weatherService: WeatherService,
    private loadingCtrl: LoadingController,
    private statusBar: StatusBar,
    private toastCtrl: ToastController,
    private iab: InAppBrowser) {

    this.setFavoritesStore();
    this.checkIfFavoriteIsSaved();

    this.placeName = navParams.get('Badplats');
    this.latitude = navParams.get('Latitud');
    this.longitude = navParams.get('Longitud');
    this.county = navParams.get('Län') + ' län';
    this.commune = navParams.get('Kommun');
    this.classification = navParams.get('Klassificering');
    this.euBath = navParams.get('EuBad');
    this.year = navParams.get('År');

    if (this.euBath == 'J') this.euBath = 'Ja';
    else this.euBath = 'Nej';
  }

  async ngOnInit() {
    this.showLoading('Hämtar väder...');
    await this.getWeatherData();
    this.loader.dismiss();
  }

  setFavoritesStore() {
    this.favoritesStore = localforage.createInstance({ name: "badplatser", storeName: 'favorites' });
  }

  async checkIfFavoriteIsSaved() {
    const key = this.navParams.get('Badplats');
    const value = await this.favoritesStore.getItem(key);
    if (value != null) this.favoriteIsSaved = true;
  }

  async getWeatherData() {
    const weatherData = await this.weatherService.load(this.latitude, this.longitude);
    this.setCurrentlyWeatherData(weatherData['currently']);
    this.setHourlyWeatherData(weatherData['hourly']);
  }

  setCurrentlyWeatherData(currently: any) {
    this.temperature = parseInt(currently['temperature']) + '°C';
    this.summary = currently['summary'];
    this.icon = currently['icon'];
  }

  setHourlyWeatherData(hourly: any) {
    for (let i = 0; i < hourly.data.length; i += 1) {
      const hourData: any = hourly.data[i];

      const milliseconds: number = parseInt(hourData.time + '000');
      const hour: number = new Date(milliseconds).getHours();

      const temperature: number = parseInt(hourData.temperature);
      const icon: string = hourData.icon;

      const weatherByHour: any = { h: hour, t: temperature, i: icon };
      this.weatherByHours.push(weatherByHour);
    }
  }

  showLoading(text: string) {
    this.loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: text,
      dismissOnPageChange: true,
      cssClass: 'loading-animation'
    });
    this.loader.present();
  }

  async onSaveFavorite() {
    try {
      const key = this.placeName;
      await this.favoritesStore.setItem(key, JSON.stringify(this.navParams));
      this.favoriteIsSaved = true;
      this.showToast('Badplats har lagts till mina favoriter!', 'success-toast');
    }
    catch (error) {
      console.log(error);
      this.showToast('Ett fel uppstod när badplats skulle sparas. Var god försök igen.', 'error-toast');
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

  onVisitDarkSky() {
    this.iab.create('https://darksky.net/poweredby/', '_system');
  }

  onFindPlace() {
    this.iab.create(`https://www.google.se/maps/place/${this.latitude}+${this.longitude}`, '_system');
  }

}
