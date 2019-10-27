import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TruckSchema } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { TruckService } from 'src/app/core/services/schema/truck.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class TruckHttpService {
  constructor(
    private http: HttpClient,
    private truckService: TruckService,
    private logger: LoggerService,
  ) { }


  getCategories(): Observable<Array<TruckSchema>> {
    return this.http.get<Array<TruckSchema>>(`${URL}/truck`)
      .pipe(
        tap((trucks: TruckSchema[]) => {
          this.logger.log(`Insert ${trucks.length} trucks.`);
          this.truckService.trucks = trucks;
        }),
      );
  }
}
