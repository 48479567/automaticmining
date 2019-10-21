import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from 'src/app/shared/components';
import { FormDialogData } from 'src/app/shared/models/dialog/dialog.model';
import { TextboxQuestion, DropdownQuestion, FilterToggleIcon, CategorySchema } from 'src/app/shared/models';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import { carriers } from '../../../../core/mocks/data';


@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})

export class CarrierComponent implements OnInit {
  filtersIcon: FilterToggleIcon[];

  carriers: CategorySchema[] = carriers;


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

  openFormDialog(selectedCarrier: CategorySchema): void {
    const formDialogRef = this.dialog.open(FormDialogComponent, {
      data: { title: 'Carrier Dialog', questions: [
        new TextboxQuestion({
          key: 'carriername',
          label: 'Carrier Name',
          value: selectedCarrier.name,
          required: true,
          type: 'text',
        }),
        new TextboxQuestion({
          key: 'idcarrier',
          label: 'ID Carrier',
          value: '',
          required: true,
          type: 'text'
        }),
        new TextboxQuestion({
          key: 'quantity',
          label: 'Quantity',
          value: selectedCarrier.quantity,
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
      ], content: selectedCarrier } as FormDialogData
    } );
  }
}
