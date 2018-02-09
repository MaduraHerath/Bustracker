import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Route } from '../../models/route';
import { Routes } from './../../mocks/providers/routes';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Route[];

  constructor(public navCtrl: NavController, public routes: Routes, public modalCtrl: ModalController) {
    this.currentItems = this.routes.query();
  }

  /**
   * The view loaded, let's query our routes for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.routes.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of routes.
   */
  deleteItem(item) {
    this.routes.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Route) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
