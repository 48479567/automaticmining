import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TruckSchema } from '../../../shared/models';
import { URL } from '../data.http';
import { TruckService } from '../../services/schema/truck.service';
import { LoggerService } from '../../logger.service';

@Injectable({providedIn: 'root'})
export class TruckHttpService {
  constructor(
    private http: HttpClient,
    private truckService: TruckService,
    private logger: LoggerService,
  ) { }


  getTrucks(): Observable<Array<TruckSchema>> {
    return this.http.get<Array<TruckSchema>>(`${URL}/truck`)
      .pipe(
        tap((trucks: TruckSchema[]) => {
          this.logger.log(`Insert ${trucks.length} trucks.`);
          this.truckService.trucks = trucks;
        }),
      );
  }
}
