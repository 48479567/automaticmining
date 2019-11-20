import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChequerSchema } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ChequerService {
  chequers: ChequerSchema[];

  getChequers(): Observable<Array<ChequerSchema>> {
    return of(this.chequers);
  }

  constructor(

  ) {
  }
}
