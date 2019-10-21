import { Injectable } from '@angular/core';
import { products } from '../../mocks/data';
import { ProductSchema } from 'src/app/shared/models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Array<ProductSchema>> {
    return of(products);
  }

  constructor() { }
}
