import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChequerSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ChequerService {
  chequers: ChequerSchema[];

  getCategories(): Observable<Array<ChequerSchema>> {
    return of(this.chequers);
  }

  constructor(

  ) {
  }
}
