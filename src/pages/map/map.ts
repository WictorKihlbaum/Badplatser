import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController, Select, ToastController } from 'ionic-angular';
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

  @ViewChild('countySelect') countySelect: Select;

  private searchPage: any = SearchPage;
  private currentLat: number;
  private currentLng: number;
  private loader: any;
  private map: any;
  private places: any;
  private activeInfoBubble: any;

  private userMarker: any;
  private markers: any = [];
  private markerClusterer: any;

  private userCounty: string;
  private counties: any = ['Blekinge', 'Dalarna', 'Gotland', 'Gävleborg', 'Halland', 'Jämtland', 'Jönköping', 'Kalmar', 'Kronoberg', 'Norrbotten', 'Skåne', 'Stockholm', 'Södermanland', 'Uppsala', 'Värmland', 'Västerbotten', 'Västernorrland', 'Västmanland', 'Västra götalands', 'Örebro', 'Östergötland'];
  private chosenCounty: string;

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
      await this.getUserCounty();
      this.markAllPlaces();
      this.markAllSeaTemperatures();
      this.setMapEvents();
      this.setUserWatcher();
    }
    catch (error) {
      this.showToast(error, 'error-toast');
      this.loader.dismiss();
      console.log(error);
    }
  }

  userCoordinatesAreSet() {
    return typeof this.currentLat != 'undefined' && typeof this.currentLng != 'undefined';
  }

  setUserWatcher() {
    if (this.userCoordinatesAreSet()) {
      const watch = this.geolocation.watchPosition();
      watch.subscribe(data => {
        const latitude: any = data.coords.latitude;
        const longitude: any = data.coords.longitude;

        if (latitude && longitude) {
          const position: any = new google.maps.LatLng(latitude, longitude);
          this.userMarker.setPosition(position);
        }
      });
    }
  }

  async setCurrentCoordinates() {
    try {
      const position = await this.geolocation.getCurrentPosition();
      this.currentLat = position.coords.latitude;
      this.currentLng = position.coords.longitude;
    }
    catch (error) {
      console.log('Din nuvarande plats kunde inte hämtas');
    }
  }

  async getUserCounty() {
    if (this.userCoordinatesAreSet()) {
      const county = await this.placesService.getUserCounty(this.currentLat, this.currentLng);
      this.userCounty = county;
      this.chosenCounty = this.counties.find(c => {
        return county.toLowerCase().includes(c.toLowerCase())
      });
    } else {
      this.showToast('Ditt län kunde inte hittas. Var vänlig välj ett i listan.', 'info-toast');
      this.countySelect.open();
    }
  }

  onCountyChange() {
    this.closeInfoBubble();
    this.userCounty = this.chosenCounty;
    this.removeMarkers();
    this.markAllPlaces();
  }

  closeInfoBubble() {
    if (this.activeInfoBubble) {
      this.activeInfoBubble.close();
    }
  }

  initMap() {
    try {
      const latitude: number = this.currentLat || 62;
      const longitude: number = this.currentLng || 15;
      const mapZoom: number = this.getMapZoom();
      const point = { lat: latitude, lng: longitude };
      const divMap = (<HTMLInputElement>document.getElementById('map'));

      this.map = new google.maps.Map(divMap, {
        center: point,
        zoom: mapZoom,
        styles: this.getMapStyle(),
        disableDefaultUI: true,
        draggable: true,
        zoomControl: false,
        clickableIcons: false,
        gestureHandling: 'greedy'
      });
    }
    catch (error) {
      throw 'Kartan kunde inte laddas. Du kan fortfarande söka bland badplatser via "Sök".';
    }
  }

  getMapZoom() {
    if (this.userCoordinatesAreSet()) return 15;
    else return 4;
  }

  setLoaderDismiss() {
    google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
      this.loader.dismiss();
    });
  }

  showCurrentLocationOnMap(coordinates: any) {
    if (this.userCoordinatesAreSet()) {
      this.userMarker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: coordinates,
        icon: {
          url: 'assets/img/pin.png',
          scaledSize: new google.maps.Size(38, 38)
        }
      });
    }
  }

  async markAllPlaces() {
    for (let place of this.places['Badplatser']) {
      // Only set markers for the users current county.
      if (place.C9.toLowerCase().includes(this.userCounty.toLowerCase())) {
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
        this.markers.push(marker);
      }
    }
    this.markerClusterer = new MarkerClusterer(
      this.map, this.markers, { imagePath: 'assets/img/place-clusters/place' }
    );
  }

  removeMarkers() {

    if (this.markerClusterer && this.markers.length > 0) {
      this.markerClusterer.setMap(null);
      this.markerClusterer = null;

      for (let marker of this.markers) {
        marker.setMap(null);
      }
      this.markers = [];
    }
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
      this.closeInfoBubble();
      infoBubble.open(this.map, marker);
      this.activeInfoBubble = infoBubble;
    }
    else {
      infoBubble.close();
      this.activeInfoBubble = null;
    }
  }

  async markAllSeaTemperatures() {
    const data: any = await this.weatherService.fetchSeaTemperature();
    let markers: any = [];

    for (let station of data['station']) {
      // Set marker only if there is a temperature to show.
      if (station.value[0]) {
        const latitude: number = station.latitude;
        const longitude: number = station.longitude;
        const imageName: string = 'buoy';
        const marker: any = this.getMarker(latitude, longitude, imageName);

        marker.addListener('click', () => {
          this.onShowStation(station);
        });
        markers.push(marker);
      }
    }
    new MarkerClusterer(this.map, markers, { imagePath: 'assets/img/buoy-clusters/buoy' });
  }

  setMapEvents() {
    google.maps.event.addListener(this.map, 'click', () => {
      this.closeInfoBubble();
    });
    google.maps.event.addListener(this.map, 'zoom_changed', () => {
      this.closeInfoBubble();
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
      duration: 7000,
      position: 'top',
      cssClass: css
    });
    toast.onDidDismiss(() => {
      this.statusBar.show();
    });
    toast.present();
  }

  getMapStyle() {
    return [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#5b6571"},{"lightness":"35"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"on"},{"color":"#f3f4f4"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"weight":0.9},{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#83cead"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"color":"#fee379"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#7fc8ed"}]}];
  }

}