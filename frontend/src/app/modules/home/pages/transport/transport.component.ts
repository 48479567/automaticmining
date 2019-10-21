import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from 'src/app/shared/components';
import { FormDialogData } from 'src/app/shared/models/dialog/dialog.model';
import { TextboxQuestion, DropdownQuestion, FilterToggleIcon, CategorySchema } from 'src/app/shared/models';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import { transports } from '../../../../core/mocks/data';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})

export class TransportComponent implements OnInit {
  filtersIcon: FilterToggleIcon[];

  transports: CategorySchema[] = transports;


  constructor(
    public dialog: MatDialog,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.getFiltersIcon();
  }

  getFiltersIcon(): void {
    this.filterService.getFiltersIcon().subscribe(
      (filtersIcon: FilterToggleIcon[]) => this.filtersIcon = filtersIcon,
      (error) => console.error(error)
    );
  }

  openFormDialog(selectedTransport: CategorySchema): void {
    const formDialogRef = this.dialog.open(FormDialogComponent, {
      data: { title: 'Transport Dialog', questions: [
        new TextboxQuestion({
          key: 'transportname',
          label: 'Transport Name',
          value: selectedTransport.name,
          required: true,
          type: 'text',
        }),
        new TextboxQuestion({
          key: 'idtransport',
          label: 'ID Transport',
          value: '',
          required: true,
          type: 'text'
        }),
        new TextboxQuestion({
          key: 'quantity',
          label: 'Quantity',
          value: selectedTransport.quantity,
          required: true,
          type: 'number'
        }),
        new TextboxQuestion({
          key: 'customer',
          label: 'Customer',
          value: '',
          required: true,
          type: 'text'
        }),
        new DropdownQuestion({
          key: 'type',
          label: 'Types',
          options: [
            { key: 'Value 1', value: 'value1' },
            { key: 'Value 2', value: 'value2' },
            { key: 'Value 3', value: 'value3' },
          ]
        }),
        new TextboxQuestion({
          key: 'idphonecustomer',
          label: 'ID / Phone Number Customer',
          value: '',
          required: true,
          type: 'text'
        }),
      ], content: selectedTransport } as FormDialogData
    } );
  }
}
