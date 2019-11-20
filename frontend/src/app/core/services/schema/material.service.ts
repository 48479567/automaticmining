import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MaterialSchema } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materials: MaterialSchema[];

  getMaterials(): Observable<Array<MaterialSchema>> {
    return of(this.materials);
  }

  constructor(

  ) {
  }
}
