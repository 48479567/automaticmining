import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { ObjectRefService } from '../../../core/services/schema/object-ref.service';
import { IDialogData } from '../../models';
import { GeneralService } from '../../../core/services/schema/general.service';

const pageSizeOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 55, 70, 75,
  80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165,
  170, 175, 180, 185, 190, 195, 200];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: any;
  data: MatTableDataSource<any[]>;
  @Input() displayedColumns: string[];
  columns: string[];
  pageSizeOptions: number[] = pageSizeOptions;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private objectRef: ObjectRefService,
    private gs: GeneralService<any>
  ) {
    console.log('constructor');
  }

  ngOnInit() {
    this.getData();
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;
    this.columns = ['n', ...this.displayedColumns, 'actions'];
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  getData() {
    this.data = new MatTableDataSource(this.dataSource);
  }

  openFormDialog(item: any, index: number): void {
    const mainName = this.objectRef.mainName;
    const formDialogRef = this.dialog.open(
      this.objectRef.currentComponentForm, {
        panelClass: 'complete-width',
        data: {
          content: item,
          action: 'put',
          index,
          title: mainName,
          max: this.objectRef.lengthItemsSelected,
          selectedValue: this.objectRef.selectValueData[mainName]
        } as IDialogData
      }
    );
  }

}
