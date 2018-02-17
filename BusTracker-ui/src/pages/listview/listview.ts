import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Route } from './../../models/route';
import { Routes } from '../../providers/providers';
import { Busstops} from '../../providers/providers';
import { Busstop } from './../../models/busstop';

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
  currentBusstops: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public routes: Routes,public busstops: Busstops) {
    this.currentRoutes = this.routes.query();
    this.currentBusstops = this.busstops.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListviewPage');
  }

  getBusstops(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentBusstops = [];
      return;
    }
    this.currentBusstops = this.routes.query({
      busRoute: val
    });
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
