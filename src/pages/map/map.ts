import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController, Select, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PlacePage } from "../place/place";
import { SearchPage } from "../search/search";
import { StationPage } from "../station/station";
import { StatusBar } from "@ionic-native/status-bar";
import { WeatherService } from "../../providers/weather-service";
import { PlacesService } from "../../providers/places-service";
import { HelpPage } from "../help/help";

declare const google: any;
declare const MarkerClusterer: any;
declare const InfoBubble: any;
declare const RichMarker: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [Geolocation, WeatherService, PlacesService]
})
export class MapPage implements OnInit {

  @ViewChild('countySelect') countySelect: Select;

  private searchPage: any = SearchPage;
  private helpPage: any = HelpPage;
  private currentLat: number;
  private currentLng: number;
  private loader: any;
  private map: any;
  private places: any;
  private activeInfoBubble: any;

  private userMarker: any;
  private markers: any = [];
  private markerClusterer: any;

  private counties: any = ['Blekinge', 'Dalarna', 'Gotland', 'Gävleborg', 'Halland', 'Jämtland', 'Jönköping', 'Kalmar', 'Kronoberg', 'Norrbotten', 'Skåne', 'Stockholm', 'Södermanland', 'Uppsala', 'Värmland', 'Västerbotten', 'Västernorrland', 'Västmanland', 'Västra götaland', 'Örebro', 'Östergötland'];
  private userCounty: string;
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
      console.log('Användarens position kunde inte fastslås');
    }
  }

  async setUserCounty() {
    if (this.userCoordinatesAreSet()) {
      const county = await this.placesService.getUserCounty(this.currentLat, this.currentLng);
      if (county) {
        this.userCounty = county;
        this.chosenCounty = this.counties.find(c => {
          return county.toLowerCase().includes(c.toLowerCase())
        });
      } else {
        this.onCountyNotFound();
      }
    } else {
      this.onCountyNotFound();
    }
  }

  onCountyNotFound() {
    this.showToast('Ditt län kunde inte fastslås. Var vänlig välj ett i listan.', 'info-toast');
    this.countySelect.open();
  }

  onCountyChange() {
    this.closeActiveInfoBubble();
    this.userCounty = this.chosenCounty;
    this.removeMarkers();
    this.markAllPlaces();
  }

  closeActiveInfoBubble() {
    if (this.activeInfoBubble) {
      this.activeInfoBubble.close();
    }
  }

  initMap() {
    try {
      const mapZoom: number = this.getMapZoom();
      const mapCenter: any = this.getMapCenter();
      const divMap = (<HTMLInputElement>document.getElementById('map'));

      this.map = new google.maps.Map(divMap, {
        center: mapCenter,
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

  getMapCenter() {
    if (this.userCoordinatesAreSet()) {
      return { lat: this.currentLat, lng: this.currentLng };
    } else {
      return { lat: 62, lng: 15 };
    }
  }

  getMapZoom() {
    if (this.userCoordinatesAreSet()) return 15;
    else return 4;
  }

  setLoaderDismiss() {
    google.maps.event.addListenerOnce(this.map, 'tilesloaded', () => {
      this.onLoaderDismiss();
    });
  }

  async onLoaderDismiss() {
    this.loader.dismiss();
    this.showCurrentLocationOnMap(this.currentLat, this.currentLng);
    await this.setUserCounty();
    this.markAllPlaces();
    this.markAllSeaTemperatures();
    this.setMapEvents();
    this.setUserWatcher();
  }

  showCurrentLocationOnMap(latitude: number, longitude: number) {
    if (this.userCoordinatesAreSet()) {
      const coordinates: any = new google.maps.LatLng(latitude, longitude);
      const html: string = '<div class="user-marker marker-animation"><div>';

      this.userMarker = new RichMarker({
        position: coordinates,
        map: this.map,
        flat: true,
        content: html
      });
    }
  }

  async markAllPlaces() {
    if (this.userCounty) {
      for (let place of this.places['Badplatser']) {
        // Only set markers for the users current county.
        if (place.C9.toLowerCase().includes(this.userCounty.toLowerCase())) {
          const latitude: number = parseFloat(place.C8);
          const longitude: number = parseFloat(place.C10);
          const imageName: string = 'place';

          const marker: any = this.getMarker(latitude, longitude, imageName);
          const infoBubble = this.getInfoBubble(place.C6, 'place-bubble');

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
        const infoBubble: any = this.getInfoBubble('Havstemperatur', 'station-bubble');

        infoBubble.e.addEventListener('click', () => {
          this.onShowStation(station);
        });

        marker.addListener('click', () => {
          this.onMarkerClick(marker, infoBubble);
        });
        markers.push(marker);
      }
    }
    new MarkerClusterer(
      this.map, markers, { imagePath: 'assets/img/buoy-clusters/buoy' }
    );
  }

  removeMarkers() {
    if (this.markerClusterer && this.markers.length > 0) {
      this.markerClusterer.setMap(null);
      this.markerClusterer = null;
      this.markers.forEach(marker => marker.setMap(null));
      this.markers = [];
    }
  }

  getInfoBubble(text: string, customClass: string) {
    const html = `<div class="infobubble-content ${customClass}">${text} </div>`;
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
      this.closeActiveInfoBubble();
      infoBubble.open(this.map, marker);
      this.activeInfoBubble = infoBubble;
    }
    else {
      infoBubble.close();
      this.activeInfoBubble = null;
    }
  }

  setMapEvents() {
    google.maps.event.addListener(this.map, 'click', () => {
      this.closeActiveInfoBubble();
    });
    google.maps.event.addListener(this.map, 'zoom_changed', () => {
      this.closeActiveInfoBubble();
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
      cssClass: 'loading-animation',
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

  onChooseCounty() {
    this.countySelect.open();
  }

}