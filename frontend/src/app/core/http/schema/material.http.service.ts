import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MaterialSchema } from '../../../shared/models';
import { URL } from '../data.http';
import { MaterialService } from '../../services/schema/material.service';
import { LoggerService } from '../../logger.service';

@Injectable({providedIn: 'root'})
export class MaterialHttpService {
  constructor(
    private http: HttpClient,
    private materialService: MaterialService,
    private logger: LoggerService,
  ) { }


  getMaterials(): Observable<Array<MaterialSchema>> {
    return this.http.get<Array<MaterialSchema>>(`${URL}/material`)
      .pipe(
        tap((materials: MaterialSchema[]) => {
          this.logger.log(`Insert ${materials.length} materials.`);
          this.materialService.materials = materials;
        }),
      );
  }
}
