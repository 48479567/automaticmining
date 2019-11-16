import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../logger.service';
import { Observable } from 'rxjs';
import { URL } from '../data.http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GeneralHttpService<T> {
  constructor(
    private http: HttpClient,
    private logger: LoggerService
  ) { }

  getData(module: string): Observable<Array<T>> {
    return this.http.get<Array<T>>(`${URL}/${module}`)
      .pipe(
        tap((data: T[]) => {
          this.logger.log(`Insert ${data.length} ${module}.`);
        })
      );
  }
}
