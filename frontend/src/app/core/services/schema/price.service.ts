import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PriceSchema } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  prices: PriceSchema[];

  getPrices(): Observable<Array<PriceSchema>> {
    return of(this.prices);
  }

  constructor(

  ) {
  }
}
