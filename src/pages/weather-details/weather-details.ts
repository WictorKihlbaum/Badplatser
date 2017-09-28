import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-weather-details',
  templateUrl: 'weather-details.html',
})
export class WeatherDetailsPage {

  // Temperatures
  private temperatureMax: any;
  private temperatureMin: any;
  private apparentTemperatureMax: any;
  private apparentTemperatureMin: any;

  // Precipitation
  private precipType: any;
  private precipProbability: any;
  private precipIntensity: any;
  private precipIntensityMax: any;

  // Other
  private cloudCover: any;
  private humidity: any;
  private pressure: any;
  private windSpeed: any;


  constructor(private navParams: NavParams) {
    // Temperatures
    this.temperatureMax = navParams.get('temperatureMax').toFixed();
    this.temperatureMin = navParams.get('temperatureMin').toFixed();
    this.apparentTemperatureMax = navParams.get('apparentTemperatureMax').toFixed();
    this.apparentTemperatureMin = navParams.get('apparentTemperatureMin').toFixed();
    // Precipitation
    this.precipType = this.translatePrecipTypeToSwedish(navParams.get('precipType'));
    this.precipProbability = this.correctPercentage(navParams.get('precipProbability'));
    this.precipIntensity = navParams.get('precipIntensity').toFixed();
    this.precipIntensityMax = navParams.get('precipIntensityMax').toFixed();
    // Other
    this.cloudCover = this.correctPercentage(navParams.get('cloudCover'));
    this.humidity = this.correctPercentage(navParams.get('humidity'));
    this.pressure = navParams.get('pressure').toFixed();
    this.windSpeed = navParams.get('windSpeed').toFixed();
  }

  /*
   * Return correct percentage.
   */
  correctPercentage(data: any) {
    switch (data) {
      case 0: return 0; // Do nothing
      case 1: return 100; // If 1 return 100 (%)
      default: return data.toString().substr(2, 2); // If 0.46, return 46 (%)
    }
  }

  translatePrecipTypeToSwedish(precipType: any) {
    switch (precipType) {
      case 'rain': return 'Regn';
      case 'snow': return 'Snö';
      case 'sleet': return 'Snöblandat regn';
      default: return 'Ingen nederbörd';
    }
  }

}
