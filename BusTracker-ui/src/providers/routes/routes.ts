import { Injectable } from '@angular/core';


import { Api } from '../api/api';

import { Route } from './../../models/route';

@Injectable()
export class Routes {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/routes', params);
  }

  add(route: Route) {
  }

  delete(route: Route) {
  }

}
