import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Routes } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  route: any;

  constructor(public navCtrl: NavController, navParams: NavParams, routes: Routes) {
    this.route = navParams.get('route') || routes.defaultItem;
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad CountdownPage');
   
  }
}

