import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogViewComponent } from '../dialog/dialog-view/dialog-view.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Input() showActions = true;
  @Input() index: number;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openFormDialog(): void {
    const formDialogRef = this.dialog.open(DialogViewComponent, {
      data: { content: this.item, index: this.index }
    });
  }
}
