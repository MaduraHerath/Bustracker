import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Route } from './../../models/route';
import { Routes } from '../../providers/providers';
/**
 * Generated class for the ListviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listview',
  templateUrl: 'listview.html',
})
export class ListviewPage {
  currentRoutes: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public routes: Routes) {
    this.currentRoutes = this.routes.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListviewPage');
  }
  getRoutes(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentRoutes = [];
      return;
    }
    this.currentRoutes = this.routes.query({
      busRoute: val
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
