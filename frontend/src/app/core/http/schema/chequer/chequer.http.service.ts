import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ChequerSchema } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { ChequerService } from 'src/app/core/services/schema/chequer.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class ChequerHttpService {
  constructor(
    private http: HttpClient,
    private chequerService: ChequerService,
    private logger: LoggerService,
  ) { }


  getCategories(): Observable<Array<ChequerSchema>> {
    return this.http.get<Array<ChequerSchema>>(`${URL}/chequer`)
      .pipe(
        tap((chequers: ChequerSchema[]) => {
          this.logger.log(`Insert ${chequers.length} chequers.`);
          this.chequerService.chequers = chequers;
        }),
      );
  }
}
