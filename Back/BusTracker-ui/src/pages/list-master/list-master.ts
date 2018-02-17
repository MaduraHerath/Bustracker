import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, ModalController, NavController, Platform } from 'ionic-angular';

import { Route } from '../../models/route';
import { Routes } from './../../mocks/providers/routes';

import {
  GoogleMaps,
  GoogleMap,
  LatLng,
  GoogleMapsEvent,
} from '@ionic-native/google-maps';


@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Route[];
  @ViewChild('map') mapElement: ElementRef;
  private map:GoogleMap;
  private location:LatLng;
  
  constructor(private platform: Platform,private googleMaps: GoogleMaps,public navCtrl: NavController, public routes: Routes, public modalCtrl: ModalController) {
    this.currentItems = this.routes.query();
  }

  /**
   * The view loaded, let's query our routes for the list
   */
 

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

  

ionViewDidLoad() {
  this.platform.ready().then(() => {
    let element = this.mapElement.nativeElement;
    this.map = this.googleMaps.create(element);
 
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      let options = {
        target: this.location,
        zoom: 8,
        center: {lat: 6.927079, lng: 79.861244}
      };
 
      this.map.moveCamera(options);
    });
  });
}


addMarker() {
  this.map.addMarker({
    title: 'My Marker',
    icon: 'blue',
    animation: 'DROP',
    position: {
      lat: this.location.lat,
      lng: this.location.lng
    }
  })
  .then(marker => {
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('Marker Clicked');
    });
  });
}
}

