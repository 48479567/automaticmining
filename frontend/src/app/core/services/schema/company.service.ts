import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CompanySchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companies: CompanySchema[];

  getCategories(): Observable<Array<CompanySchema>> {
    return of(this.companies);
  }

  constructor(

  ) {
  }
}
