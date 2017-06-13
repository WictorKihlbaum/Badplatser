import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, Searchbar } from 'ionic-angular';
import { PlacePage } from "../place/place";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit {

  @ViewChild('searchbar') searchbar: Searchbar;

  private parsedPlaces: any;
  private places: any = [];


  constructor(private navParams: NavParams, private modalCtrl: ModalController) {
    this.parsedPlaces = JSON.parse(navParams['data']);
  }

  ngOnInit() {
    this.initializePlaces();
  }

  ionViewDidEnter() {
    this.searchbar.setFocus();
  }

  initializePlaces() {
    this.places = [];
    for (let place of this.parsedPlaces['Badplatser']) {
      this.places.push(place);
    }
  }

  getPlaces(ev: any) {
    // Reset items back to all of the items.
    this.initializePlaces();

    // Set val to the value of the searchbar.
    let val = ev.target.value;

    // If the value is an empty string don't filter the items.
    if (val && val.trim() != '') {
      this.places = this.places.filter((place) => {
        return (place.C6.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  onShowPlace(placeData: any) {
    const placeModal = this.modalCtrl.create(PlacePage, placeData);
    placeModal.present();
  }

}
