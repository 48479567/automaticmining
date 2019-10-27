import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CompanySchema } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { CompanyService } from 'src/app/core/services/schema/company.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class CompanyHttpService {
  constructor(
    private http: HttpClient,
    private companyService: CompanyService,
    private logger: LoggerService,
  ) { }


  getCategories(): Observable<Array<CompanySchema>> {
    return this.http.get<Array<CompanySchema>>(`${URL}/company`)
      .pipe(
        tap((companies: CompanySchema[]) => {
          this.logger.log(`Insert ${companies.length} companies.`);
          this.companyService.companies = companies;
        }),
      );
  }
}
