import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { WorkSchema } from '../../../shared/models';
import { URL } from '../data.http';
import { WorkService } from '../../services/schema/work.service';
import { LoggerService } from '../../logger.service';

@Injectable({providedIn: 'root'})
export class WorkHttpService {
  constructor(
    private http: HttpClient,
    private workService: WorkService,
    private logger: LoggerService,
  ) { }


  getWorks(): Observable<Array<WorkSchema>> {
    return this.http.get<Array<WorkSchema>>(`${URL}/work`)
      .pipe(
        tap((works: WorkSchema[]) => {
          this.logger.log(`Insert ${works.length} works.`);
          this.workService.works = works;
        }),
      );
  }
}
