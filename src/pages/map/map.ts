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
declare const InfoBubble: any;

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
  private places: any;

  //private distance: string = null;
  private activeInfoBubble: any;


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
      //this.markAllSeaTemperatures();
      //this.setMapEvent();
    }
    catch (error) {
      this.showToast(error, 'error-toast');
      this.loader.dismiss();
      console.log(error);
    }
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
    try {
      const point = { lat: this.currentLat, lng: this.currentLng };
      const divMap = (<HTMLInputElement>document.getElementById('map'));
      this.map = new google.maps.Map(divMap, {
        center: point,
        zoom: 15,
        styles: this.getMapStyle(),
        disableDefaultUI: true,
        draggable: true,
        zoomControl: false,
        clickableIcons: false
      });
    }
    catch (error) {
      throw 'Kartan kunde inte laddas in';
    }
  }

  setLoaderDismiss() {
    google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
      this.loader.dismiss();
    });
  }

  showCurrentLocationOnMap(coordinates: any) {
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: coordinates,
      icon: {
        url: 'assets/img/pin.png',
        scaledSize: new google.maps.Size(38, 38)
      }
    });
  }

  async markAllPlaces() {
    let markers: any = [];

    for (let place of this.places['Badplatser']) {
      const latitude: number = parseFloat(place.C8);
      const longitude: number = parseFloat(place.C10);
      const imageName: string = 'place';

      const marker: any = this.getMarker(latitude, longitude, imageName);
      const infoBubble = this.getInfoBubble(place);

      infoBubble.e.addEventListener('click', () => {
        this.onShowPlace(place);
      });

      marker.addListener('click', () => {
        this.onMarkerClick(marker, infoBubble);
      });
      markers.push(marker);
    }
    new MarkerClusterer(this.map, markers, { imagePath: 'assets/img/place-clusters/place' });
  }

  getInfoBubble(place: any) {
    const html = `<div class="infobubble-content">${place.C6} </div>`;
    return new InfoBubble({
      content: html,
      shadowStyle: 0,
      borderRadius: 4,
      arrowSize: 10,
      borderWidth: 0,
      disableAutoPan: true,
      hideCloseButton: true,
      arrowPosition: 50,
      arrowStyle: 0,
      minWidth: 'auto',
      minHeight: 'auto'
    });
  }

  onMarkerClick(marker: any, infoBubble: any) {
    if (!infoBubble.isOpen()) {
      if (this.activeInfoBubble) {
        this.activeInfoBubble.close();
      }
      infoBubble.open(this.map, marker);
      this.activeInfoBubble = infoBubble;
    }
    else {
      infoBubble.close();
      this.activeInfoBubble = null;
    }
  }

  /*
  calculateDistance(place: any) {
    const coordinates1: any = new google.maps.LatLng(place.C8, place.C10);
    const coordinates2: any = new google.maps.LatLng(this.currentLat, this.currentLng);
    const meters: number = google.maps.geometry.spherical.computeDistanceBetween(coordinates1, coordinates2);

    if (meters < 1e4) {
      this.distance = (meters / 1e3).toFixed(1) + ' Km';
    } else {
      this.distance = (meters / 1e4).toFixed(1) + ' Mil';
    }
  }
  */

  async markAllSeaTemperatures() {
    const data: any = await this.weatherService.fetchSeaTemperature();
    let markers: any = [];

    for (let station of data['station']) {
      const latitude: number = station.latitude;
      const longitude: number = station.longitude;
      const imageName: string = 'buoy';
      const marker: any = this.getMarker(latitude, longitude, imageName);

      marker.addListener('click', () => {
        this.onShowStation(station);
      });
      markers.push(marker);
    }
    new MarkerClusterer(this.map, markers, { imagePath: 'assets/img/buoy-clusters/buoy' });
  }

  setMapEvent() {
    google.maps.event.addListener(this.map, 'click', () => {
      if (this.activeInfoBubble) {
        this.activeInfoBubble.close();
      }
    });
  }

  getMarker(latitude: number, longitude: number, imageName: string) {
    return new google.maps.Marker({
      map: this.map,
      position: { lat: latitude, lng: longitude },
      icon: {
        url: `assets/img/${imageName}.png`,
        scaledSize: new google.maps.Size(42, 42)
      }
    });
  }

  onShowStation(station: any) {
    const stationModal = this.modalCtrl.create(StationPage, station);
    stationModal.present();
  }

  onShowPlace(place: any) {
    const placeModal = this.modalCtrl.create(PlacePage, place);
    placeModal.present();
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

  async onLocateUser() {
    await this.setCurrentCoordinates();
    this.map.panTo({ lat: this.currentLat, lng: this.currentLng });
    this.map.setZoom(12);
  }

  getMapStyle() {
    return [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5b6571"},{"lightness":"35"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]}];
  }

}