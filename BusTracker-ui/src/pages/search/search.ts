import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';
import { Route } from './../../models/route';
import { Routes } from '../../providers/providers';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  options : GeolocationOptions;
  currentPos : Geoposition;
  currentRoutes: any = [];
  map: GoogleMap;
   latlang :any;
  constructor(private geolocation: Geolocation,private googleMaps: GoogleMaps,public navCtrl: NavController, public navParams: NavParams, public routes: Routes) { }

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

  getUserPosition(){
    this.options = {
        enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

        this.currentPos = pos; 
        return pos;     

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    });
}

  ionViewDidLoad() {
    this.loadMap( this.getUserPosition());
    console.log("helllo",this.currentPos)
  }
ionViewDidEnter(){
    this.getUserPosition()
} 
 geo_success(position) {
  return (position.coords.latitude, position.coords.longitude);
}

 geo_error() {
  alert("Sorry, no position available.");
}

 geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};

 wpid = navigator.geolocation.watchPosition(this.geo_success, this.geo_error, this.geo_options);
 
 loadMap(lat) {
   console.log("lat",lat)
    let mapOptions: GoogleMapOptions = {
      styles:[
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dde2e3"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "color": "#c6e8b3"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c6e8b3"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c1d1d6"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#a9b8bd"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f8fbfc"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#979a9c"
            },
            {
                "visibility": "on"
            },
            {
                "weight": 0.5
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#827e7e"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#3b3c3c"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a6cbe3"
            },
            {
                "visibility": "on"
            }
        ]
    }
], 
      camera: {
         target: { 
           lat: 23.453456,
           lng:  34.4545343,
          },   
        zoom: 18,
        tilt: 30,
        duration: 60
       
      },

       
    };

    this.map = this.googleMaps.create('map', mapOptions);
  
    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        this.getUserPosition();
        // Now you can use all methods safely.
        this.map.addMarker({
            title: 'Ionic',
            icon: 'blue',
            animation: 'DROP',
            position: {
               lat: 23.453456,
               lng:  34.4545343,
            }
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }


}
