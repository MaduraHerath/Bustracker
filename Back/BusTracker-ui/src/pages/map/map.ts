import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  LatLng,
  GoogleMapsEvent,
} from '@ionic-native/google-maps';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  private map:GoogleMap;
  private location:LatLng;
  constructor(private platform: Platform,
              private googleMaps: GoogleMaps,public navCtrl: NavController, public navParams: NavParams) {
    this.location = new LatLng(42.346903, -71.135101);
  }



ionViewDidLoad() {
  this.platform.ready().then(() => {
    let element = this.mapElement.nativeElement;
    this.map = this.googleMaps.create(element);
 
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      let options = {
        target: this.location,
        zoom: 8
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
