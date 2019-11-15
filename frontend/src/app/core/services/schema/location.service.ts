import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocationSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locations: LocationSchema[];

  getLocations(): Observable<Array<LocationSchema>> {
    return of(this.locations);
  }

  constructor(

  ) {
  }
}
