import { Injectable } from '@angular/core';
import { FilterToggle, FilterToggleIcon } from 'src/app/shared/models';
import {
  filtersSources,
  filtersCharts,
  filterIcon
} from '../../../../assets/data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(

  ) { }

  getFiltersSources(): Observable<Array<FilterToggle>> {
    return of(filtersSources);
  }
  getFiltersCharts(): Observable<Array<FilterToggle>> {
    return of(filtersCharts);
  }
  getFiltersIcon(): Observable<Array<FilterToggleIcon>> {
    return of(filterIcon);
  }
}

