import { Component, OnInit } from '@angular/core';

import { FilterService } from '../../../../core/services/filter/filter.service';

import { FilterToggle } from '../../../../shared/models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  filtersSources: FilterToggle[];
  filtersCharts: FilterToggle[];
  ChartsLabel: string[];
  filterSourceList = [];
  total = {
    product: { investment: 0, sale: 0 },
    category: { investmenet: 0, sale: 0 }
  };

  items = [
    { bg: '#252525', investment: 300, sale: 274, name: 'Work 1' },
    { bg: '#580043', investment: 525, sale: 499, name: 'Work 2' },
    { bg: '#262625', investment: 150, sale: 154, name: 'Work 3' },
    { bg: '#242556', investment: 82, sale: 75, name: 'Work 4' },
    { bg: '#565400', investment: 100, sale: 61, name: 'Work 5' },
  ];

  constructor(
    private filterService: FilterService,
  ) { }

  ngOnInit() {
    this.getFiltersCharts();
    this.getFiltersSources();
    this.getProducts();
   }

  getProducts(): any {
        this.filterSourceList.push({
          key: 'Products',
          value: {
            data: [
              { data: [26, 26, -4, -7, 10, 39],
                backgroundColor: ['#252525', '#580043', '#262625', '#242556', '#565400'],
                label: 'Ganancia'
              }
            ],
            labels: ['Work 1', 'Work 2', 'Work 3', 'Work 4', 'Work 5'],
          }
        });
      }

  getFiltersSources(): void {
    this.filterService.getFiltersSources().subscribe(
      (filtersSources: FilterToggle[]) => this.filtersSources = filtersSources);
  }

  getFiltersCharts(): void {
    this.filterService.getFiltersCharts().subscribe(
      (filtersCharts: FilterToggle[]) => this.filtersCharts = filtersCharts);
  }

  getColorChip(item: any): string {
    return item.sale - item.investment ? 'primary' : 'accent';
  }

  getColorHex(numberInsert: number): string {
    return `#${(Math.floor(16777215 / (numberInsert + 1.000015))).toString(16)}`;
  }
}
