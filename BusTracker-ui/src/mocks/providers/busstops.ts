import { Injectable } from '@angular/core';

import { Busstop } from '../../models/busstop';

@Injectable()
export class Busstops {
  busstops: Busstop[] = [];

  defaultbusstop: any = {
            "stopId": 2323,
            "description": "Near eye hospital",
            "latitude": 10.23,
            "longitude": 80.23,
            "distance":"2m"
  };


  constructor() {
  
    let  busStops=[
        {
            "stopId": 2323,
            "description": "Near eye hospital",
            "latitude": 10.23,
            "longitude": 80.23,
            "distance":"20m"
        },
        {
            "stopId": 2324,
            "description": "Opp gall face",
            "latitude": 10.53,
            "longitude": 80.53,
            "distance":"400m"
        },
        {
            "stopId": 2327,
            "description": "New bridge",
            "latitude": 10,
            "longitude": 80.22,
             "distance":"1.1Km"

        }
    ]


    for (let busstop of busStops) {
      this.busstops.push(new Busstop(busstop));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.busstops;
    }

    return this.busstops.filter((busstop) => {
      for (let key in params) {
        let field = busstop[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return busstop;
        } else if (field == params[key]) {
          return busstop;
        }
      }
      return null;
    });
  }

  add(busstop: Busstop) {
    this.busstops.push(busstop);
  }

  delete(busstop: Busstop) {
    this.busstops.splice(this.busstops.indexOf(busstop), 1);
  }
}
