import { Injectable } from '@angular/core';
import { GeneralHttpService } from '../../http/schema/general.http.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GeneralService<T> {
  data$: Observable<Array<T>>;

  constructor(
    private generalHttpService: GeneralHttpService<T>,
  ) { }

  getData(module: string): Observable<Array<T>> {
    if (this.data$) {
      return this.data$;
    } else {
      this.data$ = this.generalHttpService.getData(module);
      return this.data$;
    }
  }
}
