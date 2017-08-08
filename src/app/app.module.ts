import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { Network } from "@ionic-native/network";
import { HttpModule } from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { PlacePage } from "../pages/place/place";
import { SearchPage } from "../pages/search/search";
import { AboutPage } from "../pages/about/about";
import { FavoritesPage } from "../pages/favorites/favorites";
import { StationPage } from "../pages/station/station";
import { HelpPage } from "../pages/help/help";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    PlacePage,
    SearchPage,
    AboutPage,
    FavoritesPage,
    StationPage,
    HelpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    PlacePage,
    SearchPage,
    AboutPage,
    FavoritesPage,
    StationPage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
