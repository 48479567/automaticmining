import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { PriceSchema } from 'src/app/shared/models';
import { URL } from '../data.http';
import { PriceService } from 'src/app/core/services/schema/price.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class PriceHttpService {
  constructor(
    private http: HttpClient,
    private priceService: PriceService,
    private logger: LoggerService,
  ) { }


  getPrices(): Observable<Array<PriceSchema>> {
    return this.http.get<Array<PriceSchema>>(`${URL}/price`)
      .pipe(
        tap((prices: PriceSchema[]) => {
          this.logger.log(`Insert ${prices.length} prices.`);
          this.priceService.prices = prices;
        }),
      );
  }
}
