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
  @Input() showActions = true;
  @Input() index: number;
  @Input() component = FormDialogComponent;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openFormDialog(): void {
    const formDialogRef = this.dialog.open(this.component, {
      data: { content: this.item, index: this.index }
    });
  }
}
