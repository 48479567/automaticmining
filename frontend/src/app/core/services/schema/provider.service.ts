import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProviderSchema } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  providers: ProviderSchema[];

  getProviders(): Observable<Array<ProviderSchema>> {
    return of(this.providers);
  }

  constructor(

  ) {
  }
}
