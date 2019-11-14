import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: any;
  data: MatTableDataSource<any>;
  dataRelevant: any[];

  @Input() displayedColumns: string[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.dataRelevant = this.deleteIrrelevantFields(this.dataSource);
    this.data = new MatTableDataSource(this.dataRelevant);
    this.displayedColumns = Object.keys(this.dataRelevant[0]);
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
    console.log(this.data);

  }

  deleteIrrelevantFields(data: any[]): Array<any> {
    const dataRelevant: any[] = data.map((d: any, index: number) => {
      const order = index + 1;
      const {
        name = '-',
        mark = '-',
        quantity =  '-',
        investment = '-',
        sale = '-',
        price = '-',
        description = '-',
      } = d;

      return { order, name, mark, quantity, investment, sale, price, description };
    });
    return dataRelevant;
  }



  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

}
