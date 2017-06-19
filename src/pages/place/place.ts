import { Component, OnInit } from '@angular/core';
import { NavParams, ToastController } from 'ionic-angular';
import { WeatherService } from "../../providers/weather-service";
import * as localforage from "localforage";
import { StatusBar } from "@ionic-native/status-bar";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { PlacesService } from "../../providers/places-service";

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
  providers: [WeatherService]
})
export class PlacePage implements OnInit {

  private placeInfo: string = 'weather';
  private weather: string = 'weather';
  private quality: string = 'quality';

  private weatherDataIsFetched: boolean = false;
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
  private stars: any = [];

  private showSpinner: boolean = true;

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
    private iab: InAppBrowser) {

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

  async ngOnInit() {
    try {
      await this.getWeatherData();
      this.setAmountOfStars();
    }
    catch (error) {
      this.showToast(error, 'error-toast');
    }
    this.showSpinner = false;
  }

  setFavoritesStore() {
    this.favoritesStore = localforage.createInstance({ name: "badplatser", storeName: 'favorites' });
  }

  async checkIfFavoriteIsSaved() {
    const key = this.placeName;
    const value = await this.favoritesStore.getItem(key);
    if (value != null) this.favoriteIsSaved = true;
  }

  async getWeatherData() {
    try {
      const weatherData = await this.weatherService.fetchWeather(this.latitude, this.longitude);
      this.setCurrentlyWeatherData(weatherData['currently']);
      this.setHourlyWeatherData(weatherData['hourly']);
      this.setDailyWeatherData(weatherData['daily'].data[0]); // Just today
      this.weatherDataIsFetched = true;
    }
    catch (error) {
      throw 'Vädret för badplatsen kunde inte hämtas';
    }
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

  // Not the prettiest solution. Keep updated on Angular for-loop N times.
  setAmountOfStars() {
    switch (this.classification) {
      case 'Utmärkt kvalitet': this.stars = [1, 1, 1]; break;
      case 'Bra kvalitet': this.stars = [1, 1]; break;
      case 'Tillfredsställande kvalitet': this.stars = [1]; break;
      default: break;
    }
  }

}
