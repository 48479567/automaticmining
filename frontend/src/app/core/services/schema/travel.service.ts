import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TravelSchema } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  travels: TravelSchema[];

  getTravels(): Observable<Array<TravelSchema>> {
    return of(this.travels);
  }

  constructor(

  ) {
  }
}
