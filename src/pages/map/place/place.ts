import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, NavParams} from 'ionic-angular';
import { WeatherService } from "../../../providers/weather-service";

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
  providers: [WeatherService]
})
export class PlacePage implements OnInit {

  private loader: any;

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
    private navCtrl: NavController,
    private navParams: NavParams,
    private weatherService: WeatherService,
    private loadingCtrl: LoadingController) {

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

  saveToFavorites() {
    console.log('Badplats har sparats till dina favoriter!');
  }

}
