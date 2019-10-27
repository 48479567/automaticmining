import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log('itemfjasjf', this.item);
  }

  openFormDialog(): void {

    const formDialogRef = this.dialog.open(FormDialogComponent, {
      data: { content: this.item }
    });
  }
}
