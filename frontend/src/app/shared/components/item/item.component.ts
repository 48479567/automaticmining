import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ObjectRefService } from '../../../core/services/schema/object-ref.service';
import { IDialogData } from '../../models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Input() index: number;

  constructor(
    public dialog: MatDialog,
    private objectRef: ObjectRefService,
  ) { }

  ngOnInit() {
  }

  openFormDialog(): void {
    const mainName = this.objectRef.mainName;
    const formDialogRef = this.dialog.open(
      this.objectRef.currentComponentForm, {
        panelClass: 'complete-width',
        data: {
          content: this.item,
          action: 'put',
          index: this.index,
          title: mainName,
          max: this.objectRef.lengthItemsSelected,
          selectedValue: this.objectRef.selectValueData[mainName]
        } as IDialogData
    });
  }
}
