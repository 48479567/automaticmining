import { Injectable } from '@angular/core';
import { ObjectRef } from '../../../shared/models';

@Injectable({ providedIn: 'root' })
export class ObjectRefService {
  objectRef: ObjectRef = {
    carrierid: [],
    chequerid: [],
    companyid: [],
    distance: [],
    location: [],
    materialid: [],
    priceid: [],
    providerid: [],
    travelid: [],
    truck: [],
    userid: [],
    workid: []
  };
  formatQuestion: any;
  selectSchema: any = {
    http: null,
    service: null,
  };
  items: any;

  getObjectRef(resource: any[], selector: string) {
    this.objectRef[selector] = resource.map(r => ({ key: r.name, value: r._id }));
  }

}
