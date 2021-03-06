webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_review__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(launchReview) {
        this.launchReview = launchReview;
        this.mapPage = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.favoritesPage = __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__["a" /* FavoritesPage */];
    }
    HomePage.prototype.onRating = function () {
        var appId = '1257816257';
        this.launchReview.launch(appId).then(function () {
            console.log('Successfully launched store app');
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/pages/home/home.html"*/'<ion-content no-bounce id="home-content">\n\n  <ion-grid no-padding class="page-grid-home">\n\n    <ion-row align-items-end id="top-row">\n      <ion-col>\n        <!-- Logo and name -->\n        <div id="logo-container">\n          <img src="assets/img/sweden.png" id="logo-img" class="animated fadeIn" />\n          <h1 id="logo-text" class="animated fadeIn">Badställen</h1>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row id="bottom-row" align-items-center>\n\n      <!-- Water animation waves -->\n      <div class=\'wave -one\'></div>\n      <div class=\'wave -two\'></div>\n      <div class=\'wave -three\'></div>\n\n      <ion-col>\n\n        <!-- Find button -->\n        <div id="main-buttons-container">\n          <button ion-button round icon-left color="whiteBlue" id="map-button" [navPush]="mapPage" class="animated bounceIn">\n            <ion-icon name="search"></ion-icon>\n            Hitta\n          </button>\n\n          <!-- Favorites button -->\n          <button ion-button round icon-left color="whiteBlue" id="favorite-button" [navPush]="favoritesPage" class="animated bounceIn">\n            <ion-icon name="heart"></ion-icon>\n            Favoriter\n          </button>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Rating button -->\n  <ion-fab top left>\n    <button ion-fab mini id="rate-button" class="animated bounceIn" (click)="onRating()">\n      <ion-icon name="md-star"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <!-- About button -->\n  <ion-fab top right [navPush]="aboutPage">\n    <button ion-fab mini id="about-button" class="animated bounceIn">\n      <ion-icon name="md-information-circle"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_review__["a" /* LaunchReview */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_launch_review__["a" /* LaunchReview */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_place__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__station_station__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_weather_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_places_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__help_help__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var MapPage = (function () {
    function MapPage(loadingCtrl, geolocation, modalCtrl, statusBar, toastCtrl, weatherService, placesService) {
        this.loadingCtrl = loadingCtrl;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.toastCtrl = toastCtrl;
        this.weatherService = weatherService;
        this.placesService = placesService;
        this.searchPage = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
        this.helpPage = __WEBPACK_IMPORTED_MODULE_9__help_help__["a" /* HelpPage */];
        this.markers = [];
        this.counties = ['Blekinge', 'Dalarna', 'Gotland', 'Gävleborg', 'Halland', 'Jämtland', 'Jönköping', 'Kalmar', 'Kronoberg', 'Norrbotten', 'Skåne', 'Stockholm', 'Södermanland', 'Uppsala', 'Värmland', 'Västerbotten', 'Västernorrland', 'Västmanland', 'Västra götaland', 'Örebro', 'Östergötland'];
    }
    MapPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        this.showLoading('Laddar karta');
                        _a = this;
                        return [4 /*yield*/, this.placesService.getPlacesData()];
                    case 1:
                        _a.places = _b.sent();
                        return [4 /*yield*/, this.setCurrentCoordinates()];
                    case 2:
                        _b.sent();
                        this.initMap();
                        this.setLoaderDismiss();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.showToast(error_1, 'error-toast');
                        this.loader.dismiss();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.userCoordinatesAreSet = function () {
        return typeof this.currentLat != 'undefined' && typeof this.currentLng != 'undefined';
    };
    MapPage.prototype.setUserWatcher = function () {
        var _this = this;
        if (this.userCoordinatesAreSet()) {
            var watch = this.geolocation.watchPosition();
            watch.subscribe(function (data) {
                var latitude = data.coords.latitude;
                var longitude = data.coords.longitude;
                if (latitude && longitude) {
                    var position = new google.maps.LatLng(latitude, longitude);
                    _this.userMarker.setPosition(position);
                }
            });
        }
    };
    MapPage.prototype.setCurrentCoordinates = function () {
        return __awaiter(this, void 0, void 0, function () {
            var position, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.geolocation.getCurrentPosition()];
                    case 1:
                        position = _a.sent();
                        this.currentLat = position.coords.latitude;
                        this.currentLng = position.coords.longitude;
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log('Användarens position kunde inte fastslås');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.setUserCounty = function () {
        return __awaiter(this, void 0, void 0, function () {
            var county_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.userCoordinatesAreSet()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.placesService.getUserCounty(this.currentLat, this.currentLng)];
                    case 1:
                        county_1 = _a.sent();
                        if (county_1) {
                            this.userCounty = county_1;
                            this.chosenCounty = this.counties.find(function (c) {
                                return county_1.toLowerCase().includes(c.toLowerCase());
                            });
                        }
                        else {
                            this.onCountyNotFound();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.onCountyNotFound();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.onCountyNotFound = function () {
        this.showToast('Ditt län kunde inte fastslås. Var vänlig välj ett i listan.', 'info-toast');
        this.countySelect.open();
    };
    MapPage.prototype.onCountyChange = function () {
        this.closeActiveInfoBubble();
        this.userCounty = this.chosenCounty;
        this.removeMarkers();
        this.markAllPlaces();
    };
    MapPage.prototype.closeActiveInfoBubble = function () {
        if (this.activeInfoBubble) {
            this.activeInfoBubble.close();
        }
    };
    MapPage.prototype.initMap = function () {
        try {
            var mapZoom = this.getMapZoom();
            var mapCenter = this.getMapCenter();
            var divMap = document.getElementById('map');
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
    };
    MapPage.prototype.getMapCenter = function () {
        if (this.userCoordinatesAreSet()) {
            return { lat: this.currentLat, lng: this.currentLng };
        }
        else {
            return { lat: 62, lng: 15 };
        }
    };
    MapPage.prototype.getMapZoom = function () {
        if (this.userCoordinatesAreSet())
            return 15;
        else
            return 4;
    };
    MapPage.prototype.setLoaderDismiss = function () {
        var _this = this;
        google.maps.event.addListenerOnce(this.map, 'tilesloaded', function () {
            _this.onLoaderDismiss();
        });
    };
    MapPage.prototype.onLoaderDismiss = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader.dismiss();
                        this.showCurrentLocationOnMap(this.currentLat, this.currentLng);
                        return [4 /*yield*/, this.setUserCounty()];
                    case 1:
                        _a.sent();
                        this.markAllPlaces();
                        this.markAllSeaTemperatures();
                        this.setMapEvents();
                        this.setUserWatcher();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.showCurrentLocationOnMap = function (latitude, longitude) {
        if (this.userCoordinatesAreSet()) {
            var coordinates = new google.maps.LatLng(latitude, longitude);
            var html = '<div class="user-marker marker-animation"><div>';
            this.userMarker = new RichMarker({
                position: coordinates,
                map: this.map,
                flat: true,
                content: html
            });
        }
    };
    MapPage.prototype.markAllPlaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _loop_1, this_1, _i, _a, place;
            return __generator(this, function (_b) {
                if (this.userCounty) {
                    _loop_1 = function (place) {
                        // Only set markers for the users current county.
                        if (place.C9.toLowerCase().includes(this_1.userCounty.toLowerCase())) {
                            var latitude = parseFloat(place.C8);
                            var longitude = parseFloat(place.C10);
                            var imageName = 'place';
                            var marker_1 = this_1.getMarker(latitude, longitude, imageName);
                            var infoBubble_1 = this_1.getInfoBubble(place.C6, 'place-bubble');
                            infoBubble_1.e.addEventListener('click', function () {
                                _this.onShowPlace(place);
                            });
                            marker_1.addListener('click', function () {
                                _this.onMarkerClick(marker_1, infoBubble_1);
                            });
                            this_1.markers.push(marker_1);
                        }
                    };
                    this_1 = this;
                    for (_i = 0, _a = this.places['Badplatser']; _i < _a.length; _i++) {
                        place = _a[_i];
                        _loop_1(place);
                    }
                    this.markerClusterer = new MarkerClusterer(this.map, this.markers, { imagePath: 'assets/img/place-clusters/place' });
                }
                return [2 /*return*/];
            });
        });
    };
    MapPage.prototype.markAllSeaTemperatures = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var data, markers, _loop_2, this_2, _i, _a, station;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.weatherService.fetchSeaTemperature()];
                    case 1:
                        data = _b.sent();
                        markers = [];
                        _loop_2 = function (station) {
                            // Set marker only if there is a temperature to show.
                            if (station.value[0]) {
                                var latitude = station.latitude;
                                var longitude = station.longitude;
                                var imageName = 'buoy';
                                var marker_2 = this_2.getMarker(latitude, longitude, imageName);
                                var infoBubble_2 = this_2.getInfoBubble('Havstemperatur', 'station-bubble');
                                infoBubble_2.e.addEventListener('click', function () {
                                    _this.onShowStation(station);
                                });
                                marker_2.addListener('click', function () {
                                    _this.onMarkerClick(marker_2, infoBubble_2);
                                });
                                markers.push(marker_2);
                            }
                        };
                        this_2 = this;
                        for (_i = 0, _a = data['station']; _i < _a.length; _i++) {
                            station = _a[_i];
                            _loop_2(station);
                        }
                        new MarkerClusterer(this.map, markers, { imagePath: 'assets/img/buoy-clusters/buoy' });
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.removeMarkers = function () {
        if (this.markerClusterer && this.markers.length > 0) {
            this.markerClusterer.setMap(null);
            this.markerClusterer = null;
            this.markers.forEach(function (marker) { return marker.setMap(null); });
            this.markers = [];
        }
    };
    MapPage.prototype.getInfoBubble = function (text, customClass) {
        var html = "<div class=\"infobubble-content " + customClass + "\">" + text + " </div>";
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
    };
    MapPage.prototype.onMarkerClick = function (marker, infoBubble) {
        if (!infoBubble.isOpen()) {
            this.closeActiveInfoBubble();
            infoBubble.open(this.map, marker);
            this.activeInfoBubble = infoBubble;
        }
        else {
            infoBubble.close();
            this.activeInfoBubble = null;
        }
    };
    MapPage.prototype.setMapEvents = function () {
        var _this = this;
        google.maps.event.addListener(this.map, 'click', function () {
            _this.closeActiveInfoBubble();
        });
        google.maps.event.addListener(this.map, 'zoom_changed', function () {
            _this.closeActiveInfoBubble();
        });
    };
    MapPage.prototype.getMarker = function (latitude, longitude, imageName) {
        return new google.maps.Marker({
            map: this.map,
            position: { lat: latitude, lng: longitude },
            icon: {
                url: "assets/img/" + imageName + ".png",
                scaledSize: new google.maps.Size(42, 42)
            }
        });
    };
    MapPage.prototype.onShowStation = function (station) {
        var stationModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__station_station__["a" /* StationPage */], station);
        stationModal.present();
    };
    MapPage.prototype.onShowPlace = function (place) {
        var placeModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__place_place__["a" /* PlacePage */], place);
        placeModal.present();
    };
    MapPage.prototype.showLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: text,
            cssClass: 'loading-animation',
        });
        this.loader.present();
    };
    MapPage.prototype.showToast = function (message, css) {
        var _this = this;
        this.statusBar.hide();
        var toast = this.toastCtrl.create({
            message: message,
            duration: 7000,
            position: 'top',
            cssClass: css
        });
        toast.onDidDismiss(function () {
            _this.statusBar.show();
        });
        toast.present();
    };
    MapPage.prototype.getMapStyle = function () {
        return [{ "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "color": "#5b6571" }, { "lightness": "35" }] }, { "featureType": "administrative.neighborhood", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#f3f4f4" }] }, { "featureType": "landscape.man_made", "elementType": "geometry", "stylers": [{ "weight": 0.9 }, { "visibility": "off" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#83cead" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#fee379" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "visibility": "on" }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.highway.controlled_access", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "visibility": "simplified" }, { "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "visibility": "on" }, { "color": "#7fc8ed" }] }];
    };
    MapPage.prototype.onChooseCounty = function () {
        this.countySelect.open();
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('countySelect'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Select */])
], MapPage.prototype, "countySelect", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/pages/map/map.html"*/'<ion-header no-border>\n  <ion-navbar [hideBackButton]="true" color="header">\n    <ion-buttons start>\n      <button ion-button icon-only navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Badkarta</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-right [navPush]="searchPage" [navParams]="places">\n        Sök\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n\n  <ion-grid id="fab-grid">\n    <ion-row justify-content-center>\n      <ion-col id="help-col">\n        <!-- Help button -->\n        <button ion-fab mini color="header" [navPush]="helpPage">\n          <ion-icon name="md-help"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col id="settings-col">\n        <!-- Settings button (choose county) -->\n        <button ion-fab mini color="header" [disabled]="!map" (click)="onChooseCounty()">\n          <ion-icon name="md-settings"></ion-icon>\n          <!-- Select item (Display hidden in CSS) -->\n          <ion-item id="county-select">\n            <ion-label>Välj Län</ion-label>\n            <ion-select [(ngModel)]="chosenCounty" okText="Välj" cancelText="Stäng" #countySelect (ionChange)="onCountyChange()" [disabled]="!map">\n              <ion-option *ngFor="let county of counties" value="{{county}}">{{ county }}</ion-option>\n            </ion-select>\n          </ion-item>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- Google Map -->\n  <div id="map"></div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/pages/map/map.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_7__providers_weather_service__["a" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_8__providers_places_service__["a" /* PlacesService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_weather_service__["a" /* WeatherService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_places_service__["a" /* PlacesService */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WeatherService = (function () {
    function WeatherService(http, platform) {
        this.http = http;
        this.platform = platform;
        this.cors = 'https://cors-anywhere.herokuapp.com/';
        this.apiUrl = 'https://api.darksky.net/forecast/2735c64ddcc4acfb0c869faf3adfad18';
        // Desktop developing purpose.
        if (platform.is('ios') || platform.is('android')) {
            this.cors = ''; // Cors is not needed on mobile devices.
        }
    }
    WeatherService.prototype.fetchWeather = function (latitude, longitude) {
        var url = this.cors + this.apiUrl + "/" + latitude + "," + longitude + "?lang=sv&units=si&exclude=flags,currently";
        return this.fetchJSON(url);
    };
    WeatherService.prototype.fetchSeaTemperature = function () {
        var url = 'https://opendata-download-ocobs.smhi.se/api/version/latest/parameter/5/station-set/all/period/latest-hour/data.json';
        return this.fetchJSON(url);
    };
    WeatherService.prototype.fetchJSON = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject();
            });
        });
    };
    return WeatherService;
}());
WeatherService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
], WeatherService);

//# sourceMappingURL=weather-service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherDetailsPage = (function () {
    function WeatherDetailsPage(navParams) {
        this.navParams = navParams;
        // Temperatures
        this.temperatureMax = navParams.get('temperatureMax').toFixed();
        this.temperatureMin = navParams.get('temperatureMin').toFixed();
        this.apparentTemperatureMax = navParams.get('apparentTemperatureMax').toFixed();
        this.apparentTemperatureMin = navParams.get('apparentTemperatureMin').toFixed();
        // Precipitation
        this.precipType = this.translatePrecipTypeToSwedish(navParams.get('precipType'));
        this.precipProbability = this.correctPercentage(navParams.get('precipProbability'));
        this.precipIntensity = navParams.get('precipIntensity').toFixed();
        this.precipIntensityMax = navParams.get('precipIntensityMax').toFixed();
        // Other
        this.cloudCover = this.correctPercentage(navParams.get('cloudCover'));
        this.humidity = this.correctPercentage(navParams.get('humidity'));
        this.pressure = navParams.get('pressure').toFixed();
        this.windSpeed = navParams.get('windSpeed').toFixed();
    }
    /*
     * Return correct percentage.
     */
    WeatherDetailsPage.prototype.correctPercentage = function (data) {
        switch (data) {
            case 0: return 0; // Do nothing
            case 1: return 100; // If 1 return 100 (%)
            default: return data.toString().substr(2, 2); // If 0.46, return 46 (%)
        }
    };
    WeatherDetailsPage.prototype.translatePrecipTypeToSwedish = function (precipType) {
        switch (precipType) {
            case 'rain': return 'Regn';
            case 'snow': return 'Snö';
            case 'sleet': return 'Snöblandat regn';
            default: return 'Ingen nederbörd';
        }
    };
    return WeatherDetailsPage;
}());
WeatherDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-weather-details',template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/pages/weather-details/weather-details.html"*/'<ion-header no-border>\n  <ion-navbar color="header" [hideBackButton]="true">\n    <ion-buttons start>\n      <button ion-button icon-only color="lightFab" navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Väderdetaljer</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Temperatures list -->\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="thermometer" item-start></ion-icon>\n      Temperaturer\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Maxtemperatur</ion-label>\n      <span item-end>{{ temperatureMax }}°</span>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Mintemperatur</ion-label>\n      <span item-end>{{ temperatureMin }}°</span>\n    </ion-item>\n  </ion-list>\n\n  <!-- Precipitation list -->\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="rainy" item-start></ion-icon>\n      Nederbörd\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Typ</ion-label>\n      <span item-end>{{ precipType }}</span>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Risk</ion-label>\n      <span item-end>{{ precipProbability }} %</span>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Intensitet</ion-label>\n      <span item-end>{{ precipIntensity }} mm/t</span>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Maxintensitet</ion-label>\n      <span item-end>{{ precipIntensityMax }} mm/t</span>\n    </ion-item>\n  </ion-list>\n\n  <!-- Other list -->\n  <ion-list>\n    <ion-list-header>\n      <ion-icon name="information-circle" item-start></ion-icon>\n      Övrigt\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Molntäcke</ion-label>\n      <span item-end>{{ cloudCover }} %</span>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Luftfuktighet</ion-label>\n      <span item-end>{{ humidity }} %</span>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Lufttryck</ion-label>\n      <span item-end>{{ pressure }} hPa</span>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Vindhastighet</ion-label>\n      <span item-end>{{ windSpeed }} m/s</span>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/pages/weather-details/weather-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], WeatherDetailsPage);

//# sourceMappingURL=weather-details.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_place__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = (function () {
    function SearchPage(navParams, modalCtrl) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.places = [];
        this.placesToShow = [];
    }
    SearchPage.prototype.ngOnInit = function () {
        this.initializePlaces();
    };
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.searchbar.setFocus();
        }, 100);
    };
    SearchPage.prototype.initializePlaces = function () {
        this.places = this.navParams['data'].Badplatser;
    };
    SearchPage.prototype.getPlaces = function (ev) {
        // Reset items back to all of the items.
        this.initializePlaces();
        // Set val to the value of the searchbar.
        var val = ev.target.value;
        // If the value is an empty string or contains less than three letters don't filter the items.
        if (val && val.trim() != '' && val.length >= 3) {
            this.placesToShow = this.places.filter(function (place) {
                return (place.C6.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.placesToShow = [];
        }
    };
    SearchPage.prototype.onShowPlace = function (placeData) {
        var placeModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__place_place__["a" /* PlacePage */], placeData);
        placeModal.present();
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('searchbar'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Searchbar */])
], SearchPage.prototype, "searchbar", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/pages/search/search.html"*/'<ion-header no-border>\n  <ion-navbar color="header" [hideBackButton]="true">\n    <ion-buttons start>\n      <button ion-button icon-only color="lightFab" navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Sök badplats</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar color="header">\n    <ion-searchbar (ionInput)="getPlaces($event)" placeholder="Skriv in badplatsens namn" #searchbar></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-bounce>\n\n  <ion-list>\n    <ion-item detail-push *ngFor="let place of placesToShow" (click)="onShowPlace(place)" class="place">\n      <ion-avatar item-start>\n        <img src="assets/img/swimming-blue-large.png">\n      </ion-avatar>\n      <h2>{{ place.C6 }}</h2>\n      <p>{{ place.C7 }}, {{ place.C9 }}</p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StationPage = (function () {
    function StationPage(navParams) {
        this.navParams = navParams;
        var value = navParams.get('value')[0];
        this.name = navParams.get('name');
        this.temperature = parseInt(value.value).toString() + '°';
        this.date = this.getDate(value.date);
    }
    StationPage.prototype.getDate = function (milliseconds) {
        var date = new Date(milliseconds);
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var hours = date.getHours().toString();
        if (hours.length == 1)
            hours = '0' + hours;
        return day + "/" + month + " Kl. " + hours;
    };
    return StationPage;
}());
StationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-station',template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/pages/station/station.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n\n    <ion-buttons start>\n      <button ion-button icon-only clear navPop>\n        <ion-icon name="md-close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>Havstemperatur</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce class="gradient-background">\n\n  <ion-grid class="page-grid">\n    <ion-row align-items-center>\n      <ion-col>\n\n        <img src="assets/img/buoy-big.png" />\n\n        <div id="temperature-container">\n          <h2>Havstemperatur</h2>\n          <h3>{{ temperature }}</h3>\n        </div>\n\n        <div id="station-name-container">\n          <h4>Station</h4>\n          <h5>{{ name }}</h5>\n        </div>\n\n        <div id="date-container">\n          <h4>Uppmättes</h4>\n          <h5>{{ date }}</h5>\n        </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/pages/station/station.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], StationPage);

//# sourceMappingURL=station.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpPage = (function () {
    function HelpPage() {
    }
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/pages/help/help.html"*/'<ion-header no-border>\n  <ion-navbar [hideBackButton]="true" color="header">\n    <ion-buttons start>\n      <button ion-button icon-only navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Hjälp</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  \n  <ion-card>\n    <ion-card-content>\n        <p>\n            Nedan följer kortfattad information som förklarar kartvyn och dess markörer.\n            För att gå in på en badplats eller mätstation för havstemperatur\n            trycker du först på önskad markör och därefter igen på den bubbla som\n            dyker upp ovanför markören.\n          </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item class="help-item">\n      <ion-avatar item-start>\n        <img src="assets/img/place.png">\n      </ion-avatar>\n      <h2>Badplats</h2>\n    </ion-item>\n\n    <ion-card-content>\n      <p>Ljusblåa markörer motsvarar badplatser.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item class="help-item">\n      <ion-avatar item-start>\n        <img src="assets/img/buoy.png">\n      </ion-avatar>\n      <h2>Havstemperatur</h2>\n    </ion-item>\n\n    <ion-card-content>\n      <p>Mörkblåa markörer motsvarar mätstationer för havstemperaturer.</p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item class="help-item">\n      <h2>Kluster</h2>\n    </ion-item>\n\n    <ion-card-content>\n      <p>\n        När kartan är utzoomad slår markörerna ihop sig till så kallade klustermarkörer\n        för att skapa en översiktligare kartvy. Varje klustermarkör har ett nummer\n        som motsvarar antalet badplatser eller mätstationer för havstemperaturer för dess\n        geografiska område.\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/pages/help/help.html"*/,
    }),
    __metadata("design:paramtypes", [])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = (function () {
    function AboutPage() {
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/pages/about/about.html"*/'<ion-header no-border>\n  <ion-navbar color="header" [hideBackButton]="true">\n    <ion-buttons start>\n      <button ion-button icon-only color="lightFab" navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Om appen</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce class="gradient-background">\n\n  <ion-grid class="page-grid">\n    <ion-row align-items-center>\n      <ion-col>\n\n        <img src="assets/img/about-info.png" id="info-icon" />\n\n        <p class="text">\n          <strong>Badställen</strong> visar Sveriges badplatser som rapporterats\n          in till <strong>Havs- och vattenmyndigheten</strong>. Appen visar rådande väder för varje badplats samt\n          hur vädret förväntas bli för de kommande 48 timmarna. Varje badplats visar dess\n          badvattenkvalitet och huruvida det är ett EU-bad eller ej. Det finns även möjlighet\n          att se havstemperaturer längs med Sveriges kust.\n        </p>\n\n        <p class="text">\n          All väderdata hämtas från <strong>Dark Sky</strong> och havstemperaturer hämtas från <strong>SMHI.</strong>\n        </p>\n\n        <p class="text">\n          Samtliga bilder i appen har skapats av <strong>Freepik</strong> och hämtats från <strong>Flaticon</strong>.\n        </p>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localforage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_place__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FavoritesPage = (function () {
    function FavoritesPage(modalCtrl, statusBar, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.toastCtrl = toastCtrl;
        this.favorites = [];
        this.deleteButtonWasPressed = false;
        this.setFavoritesStore();
        this.listFavorites();
    }
    FavoritesPage.prototype.ionViewDidEnter = function () {
        this.setAnimationDuration();
    };
    FavoritesPage.prototype.setFavoritesStore = function () {
        this.favoritesStore = __WEBPACK_IMPORTED_MODULE_2_localforage__["createInstance"]({ name: "badplatser", storeName: 'favorites' });
    };
    FavoritesPage.prototype.listFavorites = function () {
        var _this = this;
        this.favoritesStore.iterate(function (value) {
            _this.favorites.push(JSON.parse(value));
        });
    };
    FavoritesPage.prototype.onShowPlace = function (place) {
        if (!this.deleteButtonWasPressed) {
            var placeModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__place_place__["a" /* PlacePage */], place['data']);
            placeModal.present();
        }
    };
    FavoritesPage.prototype.onDeleteFavorite = function (place) {
        return __awaiter(this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                try {
                    this.deleteButtonWasPressed = true;
                    this.favoritesStore.removeItem(place['data'].C6);
                    index = this.favorites.indexOf(place);
                    this.favorites.splice(index, 1);
                    this.showToast('Badplatsen togs bort', 'success-toast');
                    this.deleteButtonWasPressed = false;
                }
                catch (error) {
                    console.log(error);
                    this.showToast('Ett fel uppstod när badplatsen skulle tas bort. Var god försök igen.', 'error-toast');
                }
                return [2 /*return*/];
            });
        });
    };
    FavoritesPage.prototype.showToast = function (message, css) {
        var _this = this;
        this.statusBar.hide();
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'top',
            cssClass: css
        });
        toast.onDidDismiss(function () {
            _this.statusBar.show();
        });
        toast.present();
    };
    FavoritesPage.prototype.setAnimationDuration = function () {
        var favorites = document.getElementsByClassName('favorite');
        var counter = 0;
        if (favorites.length > 0) {
            for (var _i = 0, favorites_1 = favorites; _i < favorites_1.length; _i++) {
                var favorite = favorites_1[_i];
                counter += 1;
                var delay = (counter * 0.55).toString();
                favorite.style.animationDelay = delay + "s";
                favorite.classList.add('zoomIn');
                favorite.style.visibility = 'visible';
            }
        }
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favorites',template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/pages/favorites/favorites.html"*/'<ion-header no-border>\n  <ion-navbar color="header" [hideBackButton]="true">\n    <ion-buttons start>\n      <button ion-button icon-only color="lightFab" navPop>\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Favoriter</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce padding class="gradient-background">\n\n  <ion-grid no-padding *ngIf="favorites.length == 0" id="no-favorites-container" class="page-grid">\n    <ion-row align-items-center>\n      <ion-col>\n\n        <img src="assets/img/favorites-heart.png" class="animated infinite pulse" />\n\n        <h1>Du har inga favoritbadplatser</h1>\n        <p>\n          Hitta badplatser och klicka på hjärtat i det övre högra\n          hörnet för att lägga till dem i din lista med favoriter.\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf="favorites.length > 0">\n    <ion-list no-lines>\n      <ion-item *ngFor="let favorite of favorites" (click)="onShowPlace(favorite)" class="favorite animated">\n\n        <ion-avatar item-start>\n          <img src="assets/img/swimming-white.png">\n        </ion-avatar>\n\n        <h2>\n          {{ favorite.data[\'C6\'] }}\n        </h2>\n\n        <p>\n          {{ favorite.data[\'C7\'] }}, {{ favorite.data[\'C9\'] }}\n        </p>\n\n        <button ion-button icon-only clear item-end (click)="onDeleteFavorite(favorite)">\n          <ion-icon name="md-close-circle" color="clearMain"></ion-icon>\n        </button>\n\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/pages/favorites/favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_map_map__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_place_place__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_favorites_favorites__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_station_station__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_help_help__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_weather_details_weather_details__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_place_place__["a" /* PlacePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_station_station__["a" /* StationPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_weather_details_weather_details__["a" /* WeatherDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_place_place__["a" /* PlacePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_station_station__["a" /* StationPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_weather_details_weather_details__["a" /* WeatherDetailsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleLightContent();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/app/app.html"*/'<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PlacesService = (function () {
    function PlacesService(http, platform) {
        this.http = http;
        this.platform = platform;
        this.googleApiKey = 'AIzaSyA6JMwgZ4S9qXMinDYU5oVLgQ3Oss9MfuI';
        this.cors = 'https://cors-anywhere.herokuapp.com/';
        this.counties = ['blekinge', 'dalarna', 'gotland', 'gävleborg', 'halland', 'jämtland', 'jönköping', 'kalmar', 'kronoberg', 'norrbotten', 'skåne', 'stockholm', 'södermanland', 'uppsala', 'värmland', 'västerbotten', 'västernorrland', 'västmanland', 'västra götaland', 'örebro', 'östergötland'];
        // Desktop developing purpose.
        if (platform.is('ios') || platform.is('android')) {
            this.cors = ''; // Cors is not needed on mobile devices.
        }
    }
    PlacesService.prototype.getUserCounty = function (latitude, longitude) {
        return __awaiter(this, void 0, void 0, function () {
            var userAddress, components, component, _i, _a, county;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getUserAddress(latitude, longitude)];
                    case 1:
                        userAddress = _b.sent();
                        components = userAddress['results'][0].address_components;
                        component = components.find(function (c) { return c.types[0] == 'administrative_area_level_1'; });
                        if (component) {
                            for (_i = 0, _a = this.counties; _i < _a.length; _i++) {
                                county = _a[_i];
                                if (component.long_name.toLowerCase().includes(county)) {
                                    return [2 /*return*/, county];
                                }
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    PlacesService.prototype.getUserAddress = function (latitude, longitude) {
        var base = 'https://maps.googleapis.com/maps/api/geocode/json';
        var parameters = "?latlng=" + latitude + "," + longitude + "&key=" + this.googleApiKey;
        var url = base + parameters;
        return this.fetchJSON(url);
    };
    PlacesService.prototype.getPlacesData = function () {
        return this.fetchJSON("assets/data/places.json");
    };
    PlacesService.prototype.fetchJSON = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject();
            });
        });
    };
    return PlacesService;
}());
PlacesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
], PlacesService);

//# sourceMappingURL=places-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_weather_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_localforage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_details_weather_details__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var PlacePage = (function () {
    function PlacePage(navParams, weatherService, statusBar, toastCtrl, iab, zone, modalCtrl) {
        this.navParams = navParams;
        this.weatherService = weatherService;
        this.statusBar = statusBar;
        this.toastCtrl = toastCtrl;
        this.iab = iab;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.weatherDetailsPage = __WEBPACK_IMPORTED_MODULE_6__weather_details_weather_details__["a" /* WeatherDetailsPage */];
        this.showGoTopButton = false;
        this.showSpinner = true;
        this.weatherDataIsFetched = false;
        this.favoriteIsSaved = false;
        // Hourly
        this.weatherByHours = [];
        this.hoursCounter = 0;
        this.days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
        this.placeName = navParams.get('C6');
        this.latitude = navParams.get('C8');
        this.longitude = navParams.get('C10');
        this.county = navParams.get('C9') + ' län';
        this.commune = navParams.get('C7');
        this.classification = navParams.get('C5');
        this.euBath = navParams.get('C3');
        this.year = navParams.get('C4');
        if (this.euBath == 'J')
            this.euBath = 'Ja';
        else
            this.euBath = 'Nej';
        this.setFavoritesStore();
        this.checkIfFavoriteIsSaved();
    }
    PlacePage.prototype.ngOnInit = function () {
        try {
            this.getWeatherData();
        }
        catch (error) {
            console.log(error);
        }
    };
    PlacePage.prototype.onScroll = function (event) {
        var _this = this;
        this.zone.run(function () {
            if (event.scrollTop > _this.content.contentHeight / 2) {
                _this.showGoTopButton = true;
            }
            else {
                _this.showGoTopButton = false;
            }
        });
    };
    PlacePage.prototype.onScrollToWeather = function () {
        var distance = this.content.contentHeight;
        this.content.scrollTo(0, distance, 500);
    };
    PlacePage.prototype.onScrollToQuality = function () {
        this.content.scrollToBottom(500);
    };
    PlacePage.prototype.onScrollToTop = function () {
        this.content.scrollToTop(500);
    };
    PlacePage.prototype.setFavoritesStore = function () {
        this.favoritesStore = __WEBPACK_IMPORTED_MODULE_3_localforage__["createInstance"]({ name: "badplatser", storeName: 'favorites' });
    };
    PlacePage.prototype.checkIfFavoriteIsSaved = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = this.placeName;
                        return [4 /*yield*/, this.favoritesStore.getItem(key)];
                    case 1:
                        value = _a.sent();
                        if (value != null)
                            this.favoriteIsSaved = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    PlacePage.prototype.getWeatherData = function () {
        var _this = this;
        this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
            var weatherData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.showSpinner = true;
                        return [4 /*yield*/, this.weatherService.fetchWeather(this.latitude, this.longitude)];
                    case 1:
                        weatherData = _a.sent();
                        this.setHourlyWeatherData(weatherData['hourly']);
                        this.setCurrentlyWeatherData();
                        this.setDailyWeatherData(weatherData['daily'].data[0]); // Just today
                        this.showSpinner = false;
                        this.weatherDataIsFetched = true;
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.showSpinner = false;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    PlacePage.prototype.onHourChange = function () {
        this.setCurrentlyWeatherData();
    };
    PlacePage.prototype.setCurrentlyWeatherData = function () {
        var hourData = this.weatherByHours[this.hoursCounter];
        this.temperature = hourData.t;
        this.summary = hourData.s;
        this.icon = hourData.i;
        this.hour = hourData.h;
        this.day = hourData.d;
    };
    PlacePage.prototype.setHourlyWeatherData = function (hourly) {
        for (var _i = 0, _a = hourly.data; _i < _a.length; _i++) {
            var hourData = _a[_i];
            var milliseconds = parseInt(hourData.time + '000');
            var date = new Date(milliseconds);
            var day = this.days[date.getDay()];
            var hour = date.getHours().toString();
            if (hour.length == 1)
                hour = '0' + hour;
            var temperature = parseInt(hourData.temperature);
            var icon = hourData.icon;
            var summary = hourData.summary;
            var weatherByHour = { h: hour, t: temperature, i: icon, s: summary, d: day };
            this.weatherByHours.push(weatherByHour);
        }
    };
    PlacePage.prototype.setDailyWeatherData = function (daily) {
        this.dailyWeatherData = daily;
        if (daily.sunsetTime) {
            var date = new Date(parseFloat(daily.sunsetTime + '000'));
            var hours = date.getHours();
            var minutes = date.getMinutes();
            if (minutes.toString().length == 1)
                minutes = '0' + minutes;
            this.sunsetTime = hours + ":" + minutes;
        }
        this.daySummary = daily.summary;
    };
    PlacePage.prototype.onSaveFavorite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        key = this.placeName;
                        return [4 /*yield*/, this.favoritesStore.setItem(key, JSON.stringify(this.navParams))];
                    case 1:
                        _a.sent();
                        this.favoriteIsSaved = true;
                        this.showToast('Badplatsen har lagts till mina favoriter', 'success-toast');
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        this.showToast('Badplatsen kunde inte sparas. Var god försök igen.', 'error-toast');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PlacePage.prototype.showToast = function (message, css) {
        var _this = this;
        this.statusBar.hide();
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top',
            cssClass: css
        });
        toast.onDidDismiss(function () {
            _this.statusBar.show();
        });
        toast.present();
    };
    PlacePage.prototype.onVisitDarkSky = function () {
        this.iab.create('https://darksky.net/poweredby/', '_system');
    };
    PlacePage.prototype.onFindPlace = function () {
        this.iab.create("https://www.google.se/maps/place/" + this.latitude + "+" + this.longitude, '_system');
    };
    PlacePage.prototype.onShowWeatherDetails = function () {
        var weatherDetailsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__weather_details_weather_details__["a" /* WeatherDetailsPage */], this.dailyWeatherData);
        weatherDetailsModal.present();
    };
    return PlacePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], PlacePage.prototype, "content", void 0);
PlacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-place',template:/*ion-inline-start:"/Users/wictor/Documents/Badplatser/src/pages/place/place.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n\n    <ion-buttons start>\n      <button ion-button icon-only clear navPop>\n        <ion-icon name="md-close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>{{ placeName }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onSaveFavorite()" [disabled]="favoriteIsSaved">\n        <ion-icon name="heart"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce class="gradient-background" (ionScroll)="onScroll($event)">\n\n  <ion-fab bottom right class="animated bounceIn" *ngIf="showGoTopButton">\n    <button ion-fab mini (click)="onScrollToTop()" color="clearMain">\n      <ion-icon name="arrow-up"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-grid class="main-grid-top">\n    <ion-row align-items-center>\n      <ion-col>\n        <img src="assets/img/lake.png" class="lake" />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="main-grid-bottom">\n    <ion-row align-items-center>\n      <ion-col padding>\n\n        <button ion-button round block icon-left class="place-button" (click)="onFindPlace()">\n          <ion-icon name="md-open"></ion-icon>\n          Hitta hit\n        </button>\n\n        <button ion-button round block icon-left class="place-button" (click)="onScrollToWeather()">\n          <ion-icon name="md-cloudy"></ion-icon>\n          Väder\n        </button>\n\n        <button ion-button round block icon-left class="place-button" (click)="onScrollToQuality()">\n          <ion-icon name="md-ribbon"></ion-icon>\n          Badvattenkvalité\n        </button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="page-grid" id="weather-grid" no-padding>\n\n    <ion-row align-items-center id="retry-row" *ngIf="!weatherDataIsFetched">\n\n      <!-- Spinner -->\n      <div *ngIf="showSpinner && !weatherDataIsFetched">\n        <ion-spinner name="bubbles" class="loader-spinner"></ion-spinner>\n      </div>\n\n      <!-- Retry text and button -->\n      <div *ngIf="!showSpinner && !weatherDataIsFetched">\n\n        <p>Vädret för badplatsen kunde inte hämtas</p>\n\n        <button ion-button round outline color="light" icon-left (click)="getWeatherData()">\n          <ion-icon name="refresh-circle"></ion-icon>\n          Försök igen\n        </button>\n      </div>\n\n    </ion-row>\n\n    <ion-row align-items-center id="weather-top-row" *ngIf="!showSpinner && weatherDataIsFetched">\n      <ion-col>\n\n        <!-- Weather data presentation -->\n        <div id="weather-container" *ngIf="!showSpinner && weatherDataIsFetched">\n\n          <ion-row>\n            <ion-col>\n              <span id="temperature">{{ temperature }}°</span>\n              <img src="assets/img/weather-icons/{{icon}}.png" id="icon" />\n            </ion-col>\n          </ion-row>\n\n          <h2 id="summary-topic">{{ summary }}</h2>\n\n          <ion-item color="clearWhite" no-lines>\n            <ion-label class="hour-label">\n              {{ day }}, kl. {{ hour }}\n            </ion-label>\n            <ion-range min="0" max="47" [(ngModel)]="hoursCounter" color="clearMain" (ionChange)="onHourChange()">\n              <ion-icon small range-left name="time"></ion-icon>\n              <ion-icon range-right name="time"></ion-icon>\n            </ion-range>\n          </ion-item>\n\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row align-items-center padding id="weather-bottom-row" *ngIf="!showSpinner && weatherDataIsFetched">\n      <ion-col>\n        <div id="todays-summery-container">\n          <h4>Dagens väder</h4>\n          <p id="summary-text">\n            {{ daySummary }} <span *ngIf="sunsetTime">Solen kommer gå ner Kl. {{ sunsetTime }}</span>\n          </p>\n        </div>\n\n        <button ion-button round icon-right id="weather-details-button" (click)="onShowWeatherDetails()">\n          Se väderdetaljer\n          <ion-icon name="arrow-forward"></ion-icon>\n        </button>\n\n        <img src="assets/img/darksky-logo.png" class="darksky-img" (click)="onVisitDarkSky()" />\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid id="quality-grid" class="page-grid">\n    <ion-row align-items-center>\n      <ion-col>\n\n        <img src="assets/img/place-quality.png" id="quality-icon" />\n\n        <h1>Klassificering</h1>\n        <h2>{{ classification }}</h2>\n\n        <h3>EU-bad</h3>\n        <h4>{{ euBath }}</h4>\n\n        <h5>Klassificerades</h5>\n        <h6>{{ year }}</h6>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/wictor/Documents/Badplatser/src/pages/place/place.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_weather_service__["a" /* WeatherService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_weather_service__["a" /* WeatherService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], PlacePage);

//# sourceMappingURL=place.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map