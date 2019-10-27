import { Component, OnInit } from '@angular/core';

import { WorkService } from 'src/app/core/services/schema/work.service';
import { FilterService } from 'src/app/core/services/filter/filter.service';

import { WorkSchema, FilterToggle, CompanySchema } from 'src/app/shared/models';
import { CompanyService } from 'src/app/core/services/schema/company.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  companies: CompanySchema[];
  works: WorkSchema[];
  filtersSources: FilterToggle[];
  filtersCharts: FilterToggle[];

  constructor(
    private workService: WorkService,
    private categoryService: CompanyService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    this.getFiltersSources();
    this.getFiltersCharts();
   }

  getProducts(): void {
    this.workService.getCategories().subscribe(
      (companies: CompanySchema[]) => this.companies = companies
    );
  }
  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (works: WorkSchema[]) => { this.works = works; console.log(this.works); },
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
