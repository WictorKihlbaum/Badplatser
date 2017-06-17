import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  private place: any;


  constructor(private navParams: NavParams) {
    this.place = navParams['data'];
  }


}
