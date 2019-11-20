import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IDistance } from '../../../shared/models';
import { URL } from '../data.http';
import { DistanceService } from '../../services/schema/distance.service';
import { LoggerService } from '../../logger.service';

@Injectable({providedIn: 'root'})
export class DistanceHttpService {
  constructor(
    private http: HttpClient,
    private distanceService: DistanceService,
    private logger: LoggerService,
  ) { }

  getDistances(): Observable<Array<IDistance>> {
    return this.http.get<Array<IDistance>>(`${URL}/distance`)
      .pipe(
        tap((distances: IDistance[]) => {
          this.logger.log(`Insert ${distances.length} distances.`);
          this.distanceService.distances = distances;
        }),
      );
  }
}
