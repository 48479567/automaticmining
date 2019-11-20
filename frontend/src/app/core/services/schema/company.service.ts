import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanySchema } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companies: CompanySchema[];

  getCompanies(): Observable<Array<CompanySchema>> {
    return of(this.companies);
  }

  constructor(

  ) {
  }
}
