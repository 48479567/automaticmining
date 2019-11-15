import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  works: WorkSchema[];

  getWorks(): Observable<Array<WorkSchema>> {
    return of(this.works);
  }

  constructor(

  ) {
  }
}
