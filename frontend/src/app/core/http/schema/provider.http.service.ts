import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProviderSchema } from 'src/app/shared/models';
import { URL } from '../data.http';
import { ProviderService } from 'src/app/core/services/schema/provider.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class ProviderHttpService {
  constructor(
    private http: HttpClient,
    private providerService: ProviderService,
    private logger: LoggerService,
  ) { }


  getProviders(): Observable<Array<ProviderSchema>> {
    return this.http.get<Array<ProviderSchema>>(`${URL}/provider`)
      .pipe(
        tap((providers: ProviderSchema[]) => {
          this.logger.log(`Insert ${providers.length} providers.`);
          this.providerService.providers = providers;
        }),
      );
  }
}
