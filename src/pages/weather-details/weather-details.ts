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
    this.temperatureMax = navParams.get('temperatureMax');
    this.temperatureMin = navParams.get('temperatureMin');
    this.apparentTemperatureMax = navParams.get('apparentTemperatureMax');
    this.apparentTemperatureMin = navParams.get('apparentTemperatureMin');
    // Precipitation
    this.precipType = navParams.get('precipType');
    this.precipProbability = navParams.get('precipProbability');
    this.precipIntensity = navParams.get('precipIntensity');
    this.precipIntensityMax = navParams.get('precipIntensityMax');
    // Other
    this.cloudCover = navParams.get('cloudCover');
    this.humidity = navParams.get('humidity');
    this.pressure = navParams.get('pressure');
    this.windSpeed = navParams.get('windSpeed');
  }

}
