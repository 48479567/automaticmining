import { Injectable } from '@angular/core';
import { IDistance } from '../../../shared/models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DistanceService {
  distances: IDistance[];

  constructor(
  ) { }

  getDistances(): Observable<Array<IDistance>> {
    return of(this.distances);
  }
}
