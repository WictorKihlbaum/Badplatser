import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, Searchbar } from 'ionic-angular';
import { PlacePage } from "../place/place";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit {

  @ViewChild('searchbar') searchbar: Searchbar;

  private places: any = [];
  private placesToShow: any = [];


  constructor(private navParams: NavParams, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.initializePlaces();
  }

  ionViewDidEnter() {
    setTimeout(() => {
        this.searchbar.setFocus();
    }, 100);
  }

  initializePlaces() {
    this.places = this.navParams['data'].Badplatser;
  }

  getPlaces(ev: any) {
    // Reset items back to all of the items.
    this.initializePlaces();

    // Set val to the value of the searchbar.
    const val = ev.target.value;

    // If the value is an empty string don't filter the items.
    if (val && val.trim() != '' && val.length >= 3) {
      this.placesToShow = this.places.filter(place => {
        return (place.C6.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
    else {
      this.placesToShow = [];
    }
  }

  onShowPlace(placeData: any) {
    const placeModal = this.modalCtrl.create(PlacePage, placeData);
    placeModal.present();
  }

}
