import { Injectable } from '@angular/core';

import { busstop } from '../../models/busstop';

@Injectable()
export class busstops {
  busstops: busstop[] = [];

  defaultbusstop: any = {
            "stopId": 2323,
            "description": "Near eye hospital",
            "latitude": 10.23,
            "longitude": 80.23
  };


  constructor() {
  
    let  busStops=[
        {
            "stopId": 2323,
            "description": "Near eye hospital",
            "latitude": 10.23,
            "longitude": 80.23
        },
        {
            "stopId": 2324,
            "description": "Opp gall face",
            "latitude": 10.53,
            "longitude": 80.53
        },
        {
            "stopId": 2327,
            "description": "New bridge",
            "latitude": 10,
            "longitude": 80.22
        }
    ]


    for (let busstop of busstops) {
      this.busstops.push(new busstop(busstop));
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

  add(busstop: busstop) {
    this.busstops.push(busstop);
  }

  delete(busstop: busstop) {
    this.busstops.splice(this.busstops.indexOf(busstop), 1);
  }
}
