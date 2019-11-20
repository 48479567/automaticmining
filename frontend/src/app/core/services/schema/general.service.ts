import { Injectable } from '@angular/core';
import { DataGeneral } from '../../../shared/models';

@Injectable({ providedIn: 'root' })
export class GeneralService<T> {

  data: DataGeneral = {
    carrier: undefined,
    chequer: undefined,
    company: undefined,
    distance: undefined,
    location: undefined,
    material: undefined,
    price: undefined,
    provider: undefined,
    travel: undefined,
    truck: undefined,
    user: undefined,
    work: undefined,
  };

  constructor(
  ) { }

}
