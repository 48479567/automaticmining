import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarrierSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {
  carriers: CarrierSchema[];

  getCarriers(): Observable<Array<CarrierSchema>> {
    return of(this.carriers);
  }

  constructor(

  ) {
  }
}
