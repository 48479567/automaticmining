import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TravelSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  travels: TravelSchema[];

  getCategories(): Observable<Array<TravelSchema>> {
    return of(this.travels);
  }

  constructor(

  ) {
  }
}
