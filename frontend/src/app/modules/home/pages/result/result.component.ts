import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/core/services/schema/product.service';
import { FilterService } from 'src/app/core/services/filter/filter.service';

import { ProductSchema, FilterToggle, CategorySchema } from 'src/app/shared/models';
import { CategoryService } from 'src/app/core/services/schema/category.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  products: ProductSchema[];
  categories: CategorySchema[];
  filtersSources: FilterToggle[];
  filtersCharts: FilterToggle[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.getFiltersSources();
    this.getFiltersCharts();
   }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products: ProductSchema[]) => this.products = products
    );
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (categories: CategorySchema[]) => { this.categories = categories; console.log(this.categories); },
      (error) => console.error(error)
    );
  }

  getFiltersSources(): void {
    this.filterService.getFiltersSources().subscribe(
      (filtersSources: FilterToggle[]) => this.filtersSources = filtersSources);
  }
  getFiltersCharts(): void {
    this.filterService.getFiltersCharts().subscribe(
      (filtersCharts: FilterToggle[]) => this.filtersCharts = filtersCharts);
  }
}
