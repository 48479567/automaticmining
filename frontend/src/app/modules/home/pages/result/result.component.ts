import { Component, OnInit } from '@angular/core';

import { FilterService } from '../../../../core/services/filter/filter.service';

import { FilterToggle, ChartReportModel } from '../../../../shared/models';
import { of, Observable } from 'rxjs';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  filtersSources: FilterToggle[];
  filtersCharts: FilterToggle[];
  ChartsLabel: string[];
  filterSourceList = [
    { key: 'Distance', value: 'distance' },
    { key: 'Price', value: 'price' },
    { key: 'Travel', value: 'travel' },
    { key: 'Truck', value: 'truck' },
  ];

  dataToReport = {
    distance: { chart: {}, schema: [] },
    price: { chart: {}, schema: [] },
    travel: { chart: {}, schema: [] },
    truck: { chart: {}, schema: [] },
  };

  constructor(
    private filterService: FilterService,
    public gs: GeneralService<any>,
    private ghs: GeneralHttpService<any>
  ) { }

  ngOnInit() {
    this.getFiltersCharts();
    this.getFiltersSources();
    this.getDataOneToChart('distance', this.gs.dataInResultChart.distance);
    this.getDataOneToChart('price', this.gs.dataInResultChart.price);
    this.getDataTwoToChart('travel', this.gs.dataInResultChart.travel);
    this.getDataTwoToChart('truck', this.gs.dataInResultChart.truck);
  }


  getDataOfSchema(module: string): Observable<Array<any>> {
    if (this.gs.data[module].length) {
      return of(this.gs.data[module]);
    }
    return this.ghs.getData(module);
  }

  getDataOneToChart(module: string, selector: string[]): void {
    const dataS: ChartReportModel = {
      data: [
        { data: [], backgroundColor: [], label: selector[0] }
      ],
      labels: []
    };
    this.getDataOfSchema(module).subscribe(
      (data: any[]) => {
        this.dataToReport[module].schema = data;
        data.forEach((d: any, i: number) => {
          dataS.data[0].data[i] = d[selector[0]];
          dataS.data[0].backgroundColor[i] = this.getColorHex(i);
          dataS.labels[i] = `* ${module} - ${i + 1}`;
          this.dataToReport[module].chart = dataS;
          console.log(`${module}:`, this.dataToReport[module].chart);
        });
      }
    );
  }

  getDataTwoToChart(module: string, selector: string[]): void {
    const dataS: ChartReportModel = {
      data: [
        { data: [], backgroundColor: [], label: selector[0] },
        { data: [], backgroundColor: [], label: selector[1] },
      ],
      labels: []
    };
    this.getDataOfSchema(module).subscribe(
      (data: any[]) => {
        this.dataToReport[module].schema = data;
        data.forEach((d: any, i: number) => {
          dataS.data[0].data[i] = d[selector[0]];
          dataS.data[0].backgroundColor[i] = this.getColorHex(i);
          dataS.data[1].data[i] = d[selector[1]];
          dataS.data[1].backgroundColor[i] = this.getColorHex(i + .5);
          dataS.labels[i] = `* ${module} - ${i + 1}`;
          this.dataToReport[module].chart = dataS;
          console.log(`${module}:`, this.dataToReport[module].chart);
        });
      }
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

  getColorChip(item: any): string {
    return item.sale - item.investment ? 'primary' : 'accent';
  }

  getColorHex(numberInsert: number): string {
    return `#${(Math.floor(16777215 / (numberInsert + 1.000015))).toString(16)}`;
  }
}
