import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogCreateComponent } from '../dialog/dialog-create.component';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemCreateComponent implements OnInit {
  @Input() itemCreate: any;
  @Input() showActions = true;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openFormDialog(): void {
    const formDialogRef = this.dialog.open(DialogCreateComponent, {
      data: { content: this.itemCreate }
    });
  }
}
