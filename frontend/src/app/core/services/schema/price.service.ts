import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PriceSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  prices: PriceSchema[];

  getCategories(): Observable<Array<PriceSchema>> {
    return of(this.prices);
  }

  constructor(

  ) {
  }
}
