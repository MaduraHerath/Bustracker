import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Route } from './../../models/route';
import { Routes } from '../../providers/providers';



@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentRoutes: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public routes: Routes) { }

  /**
   * Perform a service for the proper items.
   */
  getRoutes(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentRoutes = [];
      return;
    }
    this.currentRoutes = this.routes.query({
      numberplate: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openRoutes(route: Route) {
    this.navCtrl.push('ItemDetailPage', {
      route: route
    });
  }

}
