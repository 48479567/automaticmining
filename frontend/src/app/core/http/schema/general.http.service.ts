import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../logger.service';
import { Observable } from 'rxjs';
import { URL } from '../data.http';
import { tap, catchError } from 'rxjs/operators';
import { GeneralService } from '../../services/schema/general.service';
import { HandleErrorService } from '../../handle-error.service';

@Injectable({ providedIn: 'root' })
export class GeneralHttpService<T> {
  constructor(
    private http: HttpClient,
    private logger: LoggerService,
    private generalService: GeneralService<T>,
    private handleErrorService: HandleErrorService
  ) { }

  getData(module: string): Observable<Array<T>> {
    return this.http.get<Array<T>>(`${URL}/${module}`)
      .pipe(
        tap((data: T[]) => {
          this.logger.log(`Insert ${data.length} ${module}.`);
          this.generalService.data[module] = data;
        }),
        catchError(
          this.handleErrorService.handleError<Array<T>>(
            `Get ${module}(s)`, [], this.logger)
        )
      );
  }
}
