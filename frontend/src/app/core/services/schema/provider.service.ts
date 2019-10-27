import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProviderSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  providers: ProviderSchema[];

  getCategories(): Observable<Array<ProviderSchema>> {
    return of(this.providers);
  }

  constructor(

  ) {
  }
}
