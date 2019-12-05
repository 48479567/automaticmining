import { Injectable } from '@angular/core';
import { ObjectRef } from '../../../shared/models';
import { DialogViewComponent } from '../../../shared/components/dialog/dialog-view/dialog-view.component';

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

  mainName = '';

  currentComponentForm: any = DialogViewComponent;
  lengthItemsSelected = 0;

  selectValueData = {
    carrier: ['providerid', 'ruc', 'phonenumber'],
    chequer: ['username', 'fullname', 'status'],
    company: ['name', 'ruc'],
    distance: ['origin', 'destiny', 'value'],
    location: ['name', 'mine', 'status'],
    material: ['name', 'status'],
    price: ['materialid', 'value', 'carrierid'],
    provider: ['name', 'phonenumber'],
    travel: ['priceid', 'firstprice', 'aditionalprice', 'name'],
    truck: ['capacity', 'mark', 'plaque'],
    user: [ 'firstname', 'username', 'status'],
    work: ['customer', 'name', 'companyid'],
  };

  getObjectRef(resource: any[], selector: string) {
    this.objectRef[selector] = resource.map(r => ({ key: r.name, value: r._id }));
  }


}
