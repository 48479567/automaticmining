import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { TravelSchema } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { TravelService } from 'src/app/core/services/schema/travel.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class TravelHttpService {
  constructor(
    private http: HttpClient,
    private travelService: TravelService,
    private logger: LoggerService,
  ) { }


  getTravels(): Observable<Array<TravelSchema>> {
    return this.http.get<Array<TravelSchema>>(`${URL}/travel`)
      .pipe(
        tap((travels: TravelSchema[]) => {
          this.logger.log(`Insert ${travels.length} travels.`);
          this.travelService.travels = travels;
        }),
      );
  }
}
