import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CarrierSchema } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { CarrierService } from 'src/app/core/services/schema/carrier.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class CarrierHttpService {
  constructor(
    private http: HttpClient,
    private carrierService: CarrierService,
    private logger: LoggerService,
  ) { }


  getCarriers(): Observable<Array<CarrierSchema>> {
    return this.http.get<Array<CarrierSchema>>(`${URL}/carrier`)
      .pipe(
        tap((carriers: CarrierSchema[]) => {
          this.logger.log(`Insert ${carriers.length} carriers.`);
          this.carrierService.carriers = carriers;
        }),
      );
  }
}
