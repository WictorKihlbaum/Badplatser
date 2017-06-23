import {Component, NgZone, OnInit } from '@angular/core';
import { NavParams, ToastController} from 'ionic-angular';
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

  public showSpinner: boolean = true;
  public weatherDataIsFetched: boolean = false;
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

  // Daily
  private sunsetTime: string;
  private daySummary: string;


  constructor(
    private navParams: NavParams,
    private weatherService: WeatherService,
    private statusBar: StatusBar,
    private toastCtrl: ToastController,
    private iab: InAppBrowser,
    private zone: NgZone) {

    this.placeName = navParams.get('C6');
    this.latitude = navParams.get('C8');
    this.longitude = navParams.get('C10');
    this.county = navParams.get('C9') + ' län';
    this.commune = navParams.get('C7');
    this.classification = navParams.get('C5');
    this.euBath = navParams.get('C3');
    this.year = navParams.get('C4');

    if (this.euBath == 'J') this.euBath = 'Ja';
    else this.euBath = 'Nej';

    this.setFavoritesStore();
    this.checkIfFavoriteIsSaved();
  }

  ngOnInit() {
    try {
      this.getWeatherData();
    }
    catch (error) {
      console.log(error);
    }
  }

  setFavoritesStore() {
    this.favoritesStore = localforage.createInstance({ name: "badplatser", storeName: 'favorites' });
  }

  async checkIfFavoriteIsSaved() {
    const key = this.placeName;
    const value = await this.favoritesStore.getItem(key);
    if (value != null) this.favoriteIsSaved = true;
  }

  getWeatherData() {
    // Zone is used because there will be problem with view update otherwise.
    this.zone.run(async () => {
      try {
        this.showSpinner = true;
        const weatherData = await this.weatherService.fetchWeather(this.latitude, this.longitude);
        this.setCurrentlyWeatherData(weatherData['currently']);
        this.setHourlyWeatherData(weatherData['hourly']);
        this.setDailyWeatherData(weatherData['daily'].data[0]); // Just today
        this.showSpinner = false;
        this.weatherDataIsFetched = true;
      }
      catch (error) {
        this.showToast('Vädret för badplatsen kunde inte hämtas', 'error-toast');
        this.showSpinner = false;
      }
    });
  }

  setCurrentlyWeatherData(currently: any) {
    this.temperature = parseInt(currently['temperature']) + '°';
    this.summary = currently['summary'];
    this.icon = currently['icon'];
  }

  setHourlyWeatherData(hourly: any) {
    for (let i = 0; i < hourly.data.length; i += 1) {
      const hourData: any = hourly.data[i];

      const milliseconds: number = parseInt(hourData.time + '000');
      let hour: string = new Date(milliseconds).getHours().toString();
      if (hour.length == 1) hour = '0' + hour;

      const temperature: number = parseInt(hourData.temperature);
      const icon: string = hourData.icon;

      const weatherByHour: any = { h: hour, t: temperature, i: icon };
      this.weatherByHours.push(weatherByHour);
    }
  }

  setDailyWeatherData(daily: any) {
    if (daily.sunsetTime) {
      const date: any = new Date(parseFloat(daily.sunsetTime + '000'));
      const hours: any = date.getHours();
      const minutes: any = date.getMinutes();
      this.sunsetTime = `${hours}:${minutes}`;
    }
    this.daySummary = daily.summary;
  }

  async onSaveFavorite() {
    try {
      const key = this.placeName;
      await this.favoritesStore.setItem(key, JSON.stringify(this.navParams));
      this.favoriteIsSaved = true;
      this.showToast('Badplatsen har lagts till mina favoriter!', 'success-toast');
    }
    catch (error) {
      this.showToast('Badplatsen kunde inte sparas. Var god försök igen.', 'error-toast');
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
