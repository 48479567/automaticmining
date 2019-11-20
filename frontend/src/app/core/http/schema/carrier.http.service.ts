import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { CarrierSchema, ICarrier, CarrierSchemaForm } from '../../../shared/models';
import { URL } from '../data.http';
import { CarrierService } from '../../services/schema/carrier.service';
import { LoggerService } from '../../logger.service';
import { HandleErrorService } from '../../handle-error.service';

@Injectable({providedIn: 'root'})
export class CarrierHttpService {
  constructor(
    private http: HttpClient,
    private carrierService: CarrierService,
    private logger: LoggerService,
    private handleErrorService: HandleErrorService
  ) { }


  getCarriers(): Observable<Array<CarrierSchema>> {
    return this.http.get<Array<CarrierSchema>>(`${URL}/carrier`)
      .pipe(
        tap((carriers: CarrierSchema[]) => {
          this.logger.log(`Insert ${carriers.length} carriers.`, 'bg-primary');
          this.carrierService.carriers = carriers;
        }),
        catchError(
          this.handleErrorService.handleError<Array<ICarrier>>(
            'Get Categories', [], this.logger)
          )
      );
  }
  createCarrier(carrier: CarrierSchemaForm): Observable<ICarrier> {
    return this.http.post<ICarrier>(`${URL}/carrier`, carrier)
      .pipe(
        tap((newCarrier: ICarrier) => {
          this.logger.log(`Insert carrier with _id: ${newCarrier._id}`, 'bg-success');
          this.carrierService.carriers.push(newCarrier);
        }),
        catchError(this.handleErrorService.handleError<ICarrier>(
          'Get Carriers', null, this.logger))
      );
  }

  updateCarrier(id: string, carrier: ICarrier): Observable<ICarrier> {
    return this.http.put<ICarrier>(`${URL}/carrier/${id}`, carrier)
      .pipe(
        tap((currentCarrier: ICarrier) => {
          this.logger.log(`Updated carrier with _id: ${currentCarrier._id}.`);
        }),
        catchError(this.handleErrorService.handleError<ICarrier>(
          'Update Carrier', carrier, this.logger)
        ));
  }

}
