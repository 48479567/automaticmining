import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LocationSchema } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { LocationService } from 'src/app/core/services/schema/location.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class LocationHttpService {
  constructor(
    private http: HttpClient,
    private locationService: LocationService,
    private logger: LoggerService,
  ) { }


  getCategories(): Observable<Array<LocationSchema>> {
    return this.http.get<Array<LocationSchema>>(`${URL}/location`)
      .pipe(
        tap((locations: LocationSchema[]) => {
          this.logger.log(`Insert ${locations.length} locations.`);
          this.locationService.locations = locations;
        }),
      );
  }
}
