import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PlacePage } from "../place/place";
import { SearchPage } from "../search/search";
import { StationPage } from "../station/station";
import { StatusBar } from "@ionic-native/status-bar";
import { WeatherService } from "../../providers/weather-service";
import { PlacesService } from "../../providers/places-service";

declare const google: any;
declare const MarkerClusterer: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [Geolocation, WeatherService, PlacesService]
})
export class MapPage implements OnInit {

  private searchPage: any = SearchPage;
  private currentLat: number;
  private currentLng: number;
  private loader: any;
  private map: any;
  private defaultMapStyle: boolean = true;
  private places: any;


  constructor(
    private loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private modalCtrl: ModalController,
    private statusBar: StatusBar,
    private toastCtrl: ToastController,
    private weatherService: WeatherService,
    private placesService: PlacesService) {
  }

  async ngOnInit() {
    try {
      this.showLoading('Laddar karta');
      this.places = await this.placesService.getPlacesData();
      await this.setCurrentCoordinates();
      this.initMap();
      this.setLoaderDismiss();
      this.showCurrentLocationOnMap({ lat: this.currentLat, lng: this.currentLng });
      this.markAllPlaces();
      this.markAllSeaTemperatures();
      //this.notifyUserAboutWarnings();
    }
    catch (error) {
      this.showToast(error, 'error-toast');
      this.loader.dismiss();
      console.log(error);
    }
  }

  setLoaderDismiss() {
    google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
      this.loader.dismiss();
    });
  }

  async markAllPlaces() {
    let markers: any = [];

    for (let place of this.places['Badplatser']) {
      const latitude: number = parseFloat(place.C8);
      const longitude: number = parseFloat(place.C10);

      const marker = new google.maps.Marker({
        map: this.map,
        position: { lat: latitude, lng: longitude },
        icon: {
          url: 'assets/img/place2.png',
          scaledSize: new google.maps.Size(46, 46)
        }
      });
      marker.addListener('click', () => {
        this.onShowPlace(place);
        //this.showPlaceCard(place);
      });
      markers.push(marker);
    }
    new MarkerClusterer(this.map, markers, { imagePath: 'assets/img/place-clusters/place' });
  }

  showPlaceCard(place: any) {
    document.getElementById('card-h1').innerText = place.C6;
    document.getElementById('card-h2').innerText = `${place.C7}, ${place.C9} län`;

    const coordinates1: any = new google.maps.LatLng(place.C8, place.C10);
    const coordinates2: any = new google.maps.LatLng(this.currentLat, this.currentLng);
    const meters: number = google.maps.geometry.spherical.computeDistanceBetween(coordinates1, coordinates2);

    let distance: string;
    if (meters < 10000) {
      distance = (meters / 1000).toFixed(1) + ' Km';
    } else {
      distance = (meters / 10000).toFixed(1) + ' Mil';
    }
    document.getElementById('card-h3').innerText = `Ca ${distance} bort`;
    document.getElementById('show-button').addEventListener('click', () => {
      this.onShowPlace(place);
    });
  }

  async markAllSeaTemperatures() {
    const hardCode: string = '{"station":[{"key":"33084","name":"ONSALA","latitude":57.3919805555556,"longitude":11.91898056,"value":[{"date":1497286800000,"value":15.81,"quality":"O"}]},{"key":"2105","name":"RINGHALS","latitude":57.2497222222222,"longitude":12.1125,"value":[{"date":1497286800000,"value":16.97,"quality":"O"}]},{"key":"2109","name":"GÖTEBORG-TORSHAMNEN","latitude":57.68472222222219,"longitude":11.79055556,"value":[{"date":1497286800000,"value":15.2,"quality":"O"}]},{"key":"38053","name":"STENA VISION FERRYBOX","latitude":54.55,"longitude":18.51,"value":[null]},{"key":"38050","name":"STENA SUPERFAST X FERRYBOX","latitude":53.35,"longitude":-6.2,"value":[null]},{"key":"38041","name":"STENA JUTLANDICA FERRYBOX","latitude":57.59,"longitude":11.65,"value":[null]},{"key":"38042","name":"STENA MERSEY FERRYBOX","latitude":53.4,"longitude":-3.01,"value":[null]},{"key":"38044","name":"STENA LAGAN FERRYBOX","latitude":54.63,"longitude":-5.89,"value":[null]},{"key":"38046","name":"STENA SCANDINAVICA FERRYBOX","latitude":57.7,"longitude":11.91,"value":[null]},{"key":"38048","name":"STENA SUPERFAST VII FERRYBOX","latitude":54.94,"longitude":-5.33,"value":[null]},{"key":"38040","name":"STENA HOLLANDICA FERRYBOX","latitude":51.99,"longitude":4.08,"value":[null]},{"key":"38049","name":"STENA SUPERFAST VIII FERRYBOX","latitude":54.74,"longitude":-5.65,"value":[null]},{"key":"38031","name":"STENA SPIRIT FERRYBOX","latitude":56.17,"longitude":15.63,"value":[null]},{"key":"38033","name":"STENA DANICA FERRYBOX","latitude":0.0,"longitude":0.0,"value":[null]},{"key":"38034","name":"STENA ADVENTURE FERRYBOX","latitude":53.34,"longitude":-4.61,"value":[null]},{"key":"38035","name":"STENA BRITANNICA FERRYBOX","latitude":51.92,"longitude":2.78,"value":[null]},{"key":"38037","name":"STENA FLAVIA FERRYBOX","latitude":58.03,"longitude":19.72,"value":[null]},{"key":"33015","name":"VÄDERÖARNA WR BOJ","latitude":58.48329999999999,"longitude":10.9333,"value":[null]},{"key":"33005","name":"VÄDERÖARNA BOJ","latitude":58.48333333,"longitude":10.93333333,"value":[null]},{"key":"33002","name":"HUVUDSKÄR OST BOJ","latitude":58.93333333,"longitude":19.16666667,"value":[{"date":1497286800000,"value":11.18,"quality":"G"}]},{"key":"33003","name":"FINNGRUNDET WR BOJ","latitude":61.0,"longitude":18.66666667,"value":[null]},{"key":"33008","name":"KNOLLS GRUND BOJ","latitude":57.21666667,"longitude":17.61666667,"value":[null]},{"key":"38003","name":"TRANSPAPER FERRYBOX","latitude":54.07,"longitude":11.06,"value":[null]},{"key":"38005","name":"FREJ FERRYBOX","latitude":65.57,"longitude":22.17,"value":[null]},{"key":"38006","name":"ODEN FERRYBOX","latitude":56.03,"longitude":12.7,"value":[null]},{"key":"38007","name":"ATLE FERRYBOX","latitude":65.57,"longitude":22.17,"value":[{"date":1497286800000,"value":12.97,"quality":"O"}]},{"key":"2179","name":"FORSMARK","latitude":60.4086111111111,"longitude":18.21083333,"value":[{"date":1497286800000,"value":11.59,"quality":"O"}]},{"key":"2076","name":"MARVIKEN","latitude":58.5536111111111,"longitude":16.83722222,"value":[{"date":1497286800000,"value":13.15,"quality":"O"}]},{"key":"2507","name":"LANDSORT NORRA","latitude":58.7688888888889,"longitude":17.85888889,"value":[{"date":1497286800000,"value":13.1,"quality":"O"}]},{"key":"2088","name":"KUNGSHOLMSFORT","latitude":56.1052777777778,"longitude":15.589444439999998,"value":[{"date":1497286800000,"value":14.8,"quality":"O"}]}],"parameter":{"key":"5","name":"Havstemperatur","unit":"°C"},"period":{"key":"latest-hour","from":1497283201000,"to":1497286800000,"summary":"Data från senaste timmen"},"link":[{"rel":"data","type":"application/json","href":"https://opendata-download-ocobs.smhi.se/api/version/latest/parameter/5/station-set/all/period/latest-hour/data.json"},{"rel":"data","type":"application/xml","href":"https://opendata-download-ocobs.smhi.se/api/version/latest/parameter/5/station-set/all/period/latest-hour/data.xml"},{"rel":"data","type":"text/plain","href":"https://opendata-download-ocobs.smhi.se/api/version/latest/parameter/5/station-set/all/period/latest-hour/data.csv"},{"rel":"period","type":"application/atom+xml","href":"https://opendata-download-ocobs.smhi.se/api/version/latest/parameter/5/station-set/all/period/latest-hour.atom"},{"rel":"iso19139","type":"application/vnd.iso.19139+xml","href":"https://opendata-catalog.smhi.se/catalog/srv/eng/csw?request=GetRecordById&service=CSW&version=2.0.2&elementSetName=full&outputSchema=csw:IsoRecord&id=123059c2-11c3-4cb4-bcf0-d05924e16a10"},{"rel":"iso19139","type":"application/vnd.iso.19139+xml","href":"https://opendata-catalog.smhi.se/catalog/srv/eng/csw?request=GetRecordById&service=CSW&version=2.0.2&elementSetName=full&outputSchema=csw:IsoRecord&id=7ef0a848-a7c0-4078-9604-da90978cfb87"}]}';
    const data = JSON.parse(hardCode);
    //const data: any = await this.weatherService.fetchSeaTemperature();
    let markers: any = [];

    for (let station of data['station']) {
      const marker = new google.maps.Marker({
        map: this.map,
        position: { lat: station.latitude, lng: station.longitude },
        icon: {
          url: 'assets/img/buoy.png',
          scaledSize: new google.maps.Size(46, 46)
        }
      });
      marker.addListener('click', () => {
        this.onShowStation(station);
      });
      markers.push(marker);
    }
    new MarkerClusterer(this.map, markers, { imagePath: 'assets/img/buoy-clusters/buoy' });
  }

  onShowStation(station: any) {
    const stationModal = this.modalCtrl.create(StationPage, station);
    stationModal.present();
  }

  onShowPlace(placeData: any) {
    const placeModal = this.modalCtrl.create(PlacePage, placeData);
    placeModal.present();
  }

  async setCurrentCoordinates() {
    try {
      const position = await this.geolocation.getCurrentPosition();
      this.currentLat = position.coords.latitude;
      this.currentLng = position.coords.longitude;
    }
    catch (error) {
      throw 'Din nuvarande plats kunde inte hämtas';
    }
  }

  initMap() {
    const point = { lat: this.currentLat, lng: this.currentLng };
    const divMap = (<HTMLInputElement>document.getElementById('map'));
    this.map = new google.maps.Map(divMap, {
      center: point,
      zoom: 13,
      styles: this.getMapStyleDefault(),
      disableDefaultUI: true,
      draggable: true,
      zoomControl: false
    });
  }

  onToggleMapStyle() {
    if (this.defaultMapStyle) {
      this.map.setOptions({ styles: this.getMapStyleWater() });
      this.defaultMapStyle = false;
    } else {
      this.map.setOptions({ styles: this.getMapStyleDefault() });
      this.defaultMapStyle = true;
    }
  }

  showCurrentLocationOnMap(coordinates: any) {
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: coordinates,
      icon: {
        url: 'assets/img/pin.png',
        scaledSize: new google.maps.Size(46, 46)
      }
    });
  }

  async notifyUserAboutWarnings() {
    const userAddress: any = await this.placesService.getUserAddress(this.currentLat, this.currentLng);
    const components: any = userAddress['results'][0].address_components;
    // Find county
    const component = components.find(x => x.types[0] == 'administrative_area_level_1');
    if (component) this.getWarnings(component.long_name);
  }

  async getWarnings(county: string) {
    const warnings = await this.weatherService.fetchWarnings();
    let nearWarnings: any = [];

    for (let warning of warnings['alert']) {
      if (warning.info.event.toLowerCase() == 'fire warning') {
        if (warning.info.headline.toLowerCase().includes(county.toLowerCase())) {
          nearWarnings.push(warning);
        }
        //console.log(warning.info.headline);
        //console.log(warning.info.description);
      }
    }
    console.log(nearWarnings);
  }

  showLoading(text: string) {
    this.loader = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: text,
      cssClass: 'loading-animation'
    });
    this.loader.present();
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

  async locateUser() {
    await this.setCurrentCoordinates();
    this.map.panTo({ lat: this.currentLat, lng: this.currentLng });
    this.map.setZoom(12);
  }

  getMapStyleDefault() {
    return [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5b6571"},{"lightness":"35"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]}];
  }

  getMapStyleWater() {
    return [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#03a9f4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}];
  }

}
