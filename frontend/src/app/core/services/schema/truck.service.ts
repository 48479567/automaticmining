import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TruckSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  trucks: TruckSchema[];

  getCategories(): Observable<Array<TruckSchema>> {
    return of(this.trucks);
  }

  constructor(

  ) {
  }
}
