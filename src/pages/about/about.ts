import { Component } from '@angular/core';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(private iab: InAppBrowser) {}


  onReadReport() {
    this.iab.create('https://www.havochvatten.se/download/18.554f729615bf4ab8719d0434/1495176716915/rapport-2017-14-sveriges-badvattenkvalitet.pdf', '_system');
  }

}
