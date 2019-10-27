import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MaterialSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  materials: MaterialSchema[];

  getCategories(): Observable<Array<MaterialSchema>> {
    return of(this.materials);
  }

  constructor(

  ) {
  }
}
