import { Component } from '@angular/core';
import { MapPage } from "../map/map";
import { AboutPage } from "../about/about";
import { FavoritesPage } from "../favorites/favorites";
import { LaunchReview } from "@ionic-native/launch-review";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LaunchReview]
})
export class HomePage {

  private mapPage: any = MapPage;
  private aboutPage: any = AboutPage;
  private favoritesPage: any = FavoritesPage;
  private toast: any;


  constructor(private launchReview: LaunchReview) {}

  onRating() {
    const appId: string = '1257816257';
    this.launchReview.launch(appId).then(() => {
      console.log('Successfully launched store app');
    });
  }

}
