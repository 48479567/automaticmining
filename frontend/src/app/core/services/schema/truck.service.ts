import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TruckSchema } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  trucks: TruckSchema[];

  getTrucks(): Observable<Array<TruckSchema>> {
    return of(this.trucks);
  }

  constructor(

  ) {
  }
}
