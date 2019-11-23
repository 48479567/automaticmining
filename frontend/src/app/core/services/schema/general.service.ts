import { Injectable } from '@angular/core';
import { DataGeneral, iconsObject, Carrier } from '../../../shared/models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GeneralService<T> {

  data: DataGeneral = {
    carrier: [],
    chequer: [],
    company: [],
    distance: [],
    location: [],
    material: [],
    price: [],
    provider: [],
    travel: [],
    truck: [],
    user: [],
    work: [],
  };

  extraData = {
    carrier: {
      title: 'carrier',
      max: this.data.carrier.length,
      selectValue: ['providerid', 'ruc', 'phonenumber'] },
    chequer: {
      title: 'chequer',
      max: this.data.chequer.length,
      selectValue: ['username', 'fullname', 'status'] },
    company: {
      title: 'company',
      max: this.data.company.length,
      selectValue: ['name', 'ruc', 'image'] },
    distance: {
      title: 'distance',
      max: this.data.distance.length,
      selectValue: ['origin', 'destiny', 'value'] },
    location: {
      title: 'location',
      max: this.data.location.length,
      selectValue: ['name', 'mine', 'status'] },
    material: {
      title: 'material',
      max: this.data.material.length,
      selectValue: ['name', 'status', 'image'] },
    price: {
      title: 'price',
      max: this.data.price.length,
      selectValue: ['materialid', 'value', 'carrierid'] },
    provider: {
      title: 'provider',
      max: this.data.provider.length,
      selectValue: ['name', 'phonenumber', 'image'] },
    travel: {
      title: 'travel',
      max: this.data.travel.length,
      selectValue: ['firstprice', 'aditionalprice', 'name'] },
    truck: {
      title: 'truck',
      max: this.data.truck.length,
      selectValue: ['capacity', 'mark', 'plaque'] },
    user: {
      title: 'user',
      max: this.data.user.length,
      selectValue: ['username', 'status', 'image'] },
    work: {
      title: 'work',
      max: this.data.work.length,
      selectValue: ['name', 'companyid', 'image'] },
  };

  getIconsPropery(): Observable<any> {
    return of(iconsObject);
  }

  getData(module: string): Observable<T[]> {
    return of(this.data[module]);
  }



  constructor(
  ) { }

}
