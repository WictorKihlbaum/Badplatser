import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PlacePage } from "./place/place";
import { SearchPage } from "../search/search";

declare const google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  providers: [Geolocation]
})
export class MapPage implements OnInit {

  private searchPage: any = SearchPage;
  private currentLat: number;
  private currentLng: number;
  private loader: any;
  private map: any;
  private places: string = '{"Badplatser":[{"Ecoli":"Utmärkt kvalitet","Intestinala-enterokocker":"Utmärkt kvalitet","AntalÅr":"4","EuBad":"J","År":"2016","Klassificering":"Utmärkt kvalitet","Badplats":"Styrsö Bratten","Kommun":"Göteborg","Latitud":"57.6182151232144","Län":"Västra Götalands","Longitud":"11.7945237309771"},{"AntalÅr":"4","EuBad":"N","År":"2016","Klassificering":"Otillräckligt provtagen","Badplats":"Styrsö Uttervik","Kommun":"Göteborg","Latitud":"57.6132034891669","Län":"Västra Götalands","Longitud":"11.7614120972173"},{"Ecoli":"Utmärkt kvalitet","Intestinala-enterokocker":"Utmärkt kvalitet","AntalÅr":"4","EuBad":"J","År":"2016","Klassificering":"Utmärkt kvalitet","Badplats":"Surtesjön","Kommun":"Göteborg","Latitud":"57.8260891350605","Län":"Västra Götalands","Longitud":"12.0426468227752"},{"Ecoli":"Utmärkt kvalitet","Intestinala-enterokocker":"Utmärkt kvalitet","AntalÅr":"4","EuBad":"J","År":"2016","Klassificering":"Utmärkt kvalitet","Badplats":"Tumlehed","Kommun":"Göteborg","Latitud":"57.728647242037","Län":"Västra Götalands","Longitud":"11.7204573818267"},{"AntalÅr":"4","EuBad":"N","År":"2016","Klassificering":"Otillräckligt provtagen","Badplats":"Vrångö Mittvik","Kommun":"Göteborg","Latitud":"57.5712442078034","Län":"Västra Götalands","Longitud":"11.7920549338802"}]}';


  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private modalCtrl: ModalController) {
  }

  async ngOnInit() {
    try {
      this.showLoading('Laddar karta...');
      await this.setCurrentCoordinates();
      this.initMap();
      this.showCurrentLocationOnMap({ lat: this.currentLat, lng: this.currentLng });
      this.markAllPlaces();
      this.loader.dismiss();
    }
    catch (error) {
      console.log(error);
    }
  }

  markAllPlaces() {
    const places = JSON.parse(this.places);

    for (let place of places['Badplatser']) {
      const latitude: number = parseFloat(place.Latitud);
      const longitude: number = parseFloat(place.Longitud);

      const marker = new google.maps.Marker({
        map: this.map,
        icon: {
          url: 'assets/img/swim-pin2.png',
          scaledSize : new google.maps.Size(32, 32)
        },
        position: { lat: latitude, lng: longitude }
      });
      marker.addListener('click', () => {
        this.onShowPlace(place);
      });
    }
  }

  onShowPlace(placeData: any) {
    const placeModal = this.modalCtrl.create(PlacePage, placeData);
    placeModal.present();
    //this.navCtrl.push(PlacePage, placeData);
  }

  async setCurrentCoordinates() {
    try {
      const position = await this.geolocation.getCurrentPosition();
      this.currentLat = position.coords.latitude;
      this.currentLng = position.coords.longitude;
    }
    catch (error) {
      throw 'An error occurred while trying to get your current coordinates.';
    }
  }

  initMap() {
    const point = { lat: this.currentLat, lng: this.currentLng };
    const divMap = (<HTMLInputElement>document.getElementById('map'));
    this.map = new google.maps.Map(divMap, {
      center: point,
      zoom: 10,
      styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#6195a0"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"0"},{"color":"#f5f5f2"},{"gamma":"1"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"-3"},{"gamma":"1.00"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#bae5ce"},{"visibility":"on"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#fac9a9"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#787878"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station.airport","elementType":"labels.icon","stylers":[{"hue":"#0a00ff"},{"saturation":"-77"},{"gamma":"0.57"},{"lightness":"0"}]},{"featureType":"transit.station.rail","elementType":"labels.text.fill","stylers":[{"color":"#43321e"}]},{"featureType":"transit.station.rail","elementType":"labels.icon","stylers":[{"hue":"#ff6c00"},{"lightness":"4"},{"gamma":"0.75"},{"saturation":"-68"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#eaf6f8"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c7eced"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"-49"},{"saturation":"-53"},{"gamma":"0.79"}]}],
      disableDefaultUI: false,
      draggable: true,
      zoomControl: true
    });
  }

  showCurrentLocationOnMap(coordinates: any) {
    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      icon: {
        url: 'assets/img/avatar-pin.png',
        scaledSize : new google.maps.Size(32, 32)
      },
      position: coordinates
    });
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

}
