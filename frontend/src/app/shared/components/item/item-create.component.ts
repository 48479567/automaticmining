import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogCreateResourceComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemCreateComponent implements OnInit {
  @Input() item: any;
  @Input() showActions = true;
  @Input() component = DialogCreateResourceComponent;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openFormDialog(): void {
    const formDialogRef = this.dialog.open(this.component, {
      data: { content: this.item }
    });
  }
}
