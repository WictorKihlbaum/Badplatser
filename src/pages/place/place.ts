import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Content, NavParams, ToastController } from 'ionic-angular';
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

  @ViewChild(Content) content: Content;

  private showSpinner: boolean = true;
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

  /* WEATHER DATA */

  // Currently
  private temperature: string;
  private summary: string;
  private icon: string;
  private hour: string;
  private day: string;

  // Hourly
  private weatherByHours: any = [];
  private hoursCounter: number = 0;
  private days: any = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];

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

  onScrollToWeather() {
    this.content.scrollToTop();
  }

  onScrollToQuality() {
    this.content.scrollToBottom();
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
    this.zone.run(async () => {
      try {
        this.showSpinner = true;
        const weatherData = await this.weatherService.fetchWeather(this.latitude, this.longitude);
        this.setHourlyWeatherData(weatherData['hourly']);
        this.setCurrentlyWeatherData();
        this.setDailyWeatherData(weatherData['daily'].data[0]); // Just today
        this.showSpinner = false;
        this.weatherDataIsFetched = true;
      }
      catch (error) {
        this.showSpinner = false;
      }
    });
  }

  onHourChange() {
    this.setCurrentlyWeatherData();
  }

  setCurrentlyWeatherData() {
    const hourData: any = this.weatherByHours[this.hoursCounter];
    this.temperature = hourData.t;
    this.summary = hourData.s;
    this.icon = hourData.i;
    this.hour = hourData.h;
    this.day = hourData.d;
  }

  setHourlyWeatherData(hourly: any) {
    for (let hourData of hourly.data) {
      const milliseconds: number = parseInt(hourData.time + '000');
      const date: any = new Date(milliseconds);
      const day: string = this.days[date.getDay()];

      let hour: string = date.getHours().toString();
      if (hour.length == 1) hour = '0' + hour;

      const temperature: number = parseInt(hourData.temperature);
      const icon: string = hourData.icon;
      const summary: string = hourData.summary;

      const weatherByHour: any = { h: hour, t: temperature, i: icon, s: summary, d: day };
      this.weatherByHours.push(weatherByHour);
    }
  }

  setDailyWeatherData(daily: any) {
    if (daily.sunsetTime) {
      const date: any = new Date(parseFloat(daily.sunsetTime + '000'));
      const hours: number = date.getHours();
      let minutes: any = date.getMinutes();
      if (minutes.toString().length == 1) minutes = '0' + minutes;
      this.sunsetTime = `${hours}:${minutes}`;
    }
    this.daySummary = daily.summary;
  }

  async onSaveFavorite() {
    try {
      const key = this.placeName;
      await this.favoritesStore.setItem(key, JSON.stringify(this.navParams));
      this.favoriteIsSaved = true;
      this.showToast('Badplatsen har lagts till mina favoriter', 'success-toast');
    }
    catch (error) {
      this.showToast('Badplatsen kunde inte sparas. Var god försök igen.', 'error-toast');
    }
  }

  showToast(message: string, css: string) {
    this.statusBar.hide();
    const toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
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
