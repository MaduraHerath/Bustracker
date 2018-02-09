import { Injectable } from '@angular/core';
import { Route } from './../../models/route';

@Injectable()
export class Routes {
  routes: Route[] = [];

  defaultItem: any = {
    "busRoute":"120",
    "numberplate": "WP 12564",
    "eta": "12 minutes",

  };


  constructor() {
    let routes  = [
      {
      "busRoute":"120",
      "numberplate": "WP 12564",
      "eta": "12 minutes"

    },
     {
      "busRoute":"138",
      "numberplate": "QL 9575",
      "eta": "1 hour"

    },
     {
      "busRoute":"154",
      "numberplate": "ND 2484",
      "eta": " 1h 12m"
    }
    ];

    for (let route of routes) {
      this.routes.push(new Route(route));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.routes;
    }

    return this.routes.filter((route) => {
      for (let key in params) {
        let field = route[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return route;
        } else if (field == params[key]) {
          return route;
        }
      }
      return null;
    });
  }

  add(route: Route) {
    this.routes.push(route);
  }

  delete(route: Route) {
    this.routes.splice(this.routes.indexOf(route), 1);
  }
}
