import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { Content, LoadingController, ModalController, ToastController } from 'ionic-angular';
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

  @ViewChild(Content) content: Content;

  private searchPage: any = SearchPage;
  private currentLat: number;
  private currentLng: number;
  private loader: any;
  private map: any;
  private defaultMapStyle: boolean = true;
  private places: any;

  // Place info card
  private chosenPlace: any;
  private placeCard: any;
  private placeCardIsShowing: boolean = false;
  private distance: string = null;
  private animationIsDone: boolean = true;


  constructor(
    private loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private modalCtrl: ModalController,
    private statusBar: StatusBar,
    private toastCtrl: ToastController,
    private weatherService: WeatherService,
    private placesService: PlacesService,
    private zone: NgZone) {
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
      this.setPlaceCard();
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
          url: 'assets/img/place.png',
          scaledSize: new google.maps.Size(46, 46)
        }
      });
      marker.addListener('click', () => {
        this.onMarkerClick(place);
        this.content.resize();
      });
      markers.push(marker);
    }
    new MarkerClusterer(this.map, markers, { imagePath: 'assets/img/place-clusters/place' });
  }

  onMarkerClick(place: any) {
    if (this.animationIsDone) {
      if (place != this.chosenPlace) {
        this.chosenPlace = place;
        this.onShowPlaceCard(place);
      } else {
        this.onClosePlaceCard();
      }
    }
  }

  onShowPlaceCard(place: any) {
    this.zone.run(() => {
      this.calculateDistance(place);
      this.animatePlaceCardIn();
    });
  }

  onClosePlaceCard() {
    this.placeCardIsShowing = false;
    this.animatePlaceCardOut();
  }

  animatePlaceCardIn() {
    if (!this.placeCardIsShowing) {
      this.animationIsDone = false;
      this.placeCard.classList.remove('slideOutUp');
      this.placeCard.classList.add('slideInDown');
      this.placeCard.classList.add('visible');
      setTimeout(() => {
        this.placeCardIsShowing = true;
        this.animationIsDone = true;
      }, 1000);
    }
  }

  animatePlaceCardOut() {
    this.animationIsDone = false;
    this.placeCard.classList.remove('slideInDown');
    this.placeCard.classList.add('slideOutUp');
    setTimeout(() => {
      this.placeCard.classList.remove('visible');
      this.chosenPlace = null;
      this.animationIsDone = true;
    }, 1000);
  }

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

  async markAllSeaTemperatures() {
    const data: any = await this.weatherService.fetchSeaTemperature();
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

  onShowPlace(place: any) {
    const placeModal = this.modalCtrl.create(PlacePage, place);
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
    try {
      const point = { lat: this.currentLat, lng: this.currentLng };
      const divMap = (<HTMLInputElement>document.getElementById('map'));
      this.map = new google.maps.Map(divMap, {
        center: point,
        zoom: 14,
        styles: this.getMapStyleDefault(),
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
        scaledSize: new google.maps.Size(38, 38)
      }
    });
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

  setPlaceCard() {
    this.placeCard = (<HTMLInputElement>document.getElementById('place-card'));
  }

  getMapStyleDefault() {
    //return [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5b6571"},{"lightness":"35"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]}];
    return [{"featureType":"administrative.neighborhood","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#ff0000"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}];
  }

  getMapStyleWater() {
    return [{"elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"road","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#40c4ff"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}];
  }

}