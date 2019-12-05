import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() data$: Observable<any[]> = of([]);
  @Input() barChartLabels: string[] = [];
  @Input() type: string;

  public barChartOptions: ChartOptions = {
    showLines: true,
    responsive: true,

  };


  public barChartLegend = true;

  constructor() { }

  ngOnInit() {
    this.type = 'line';
    console.log('data in OnInit', this.data$);
  }

}
