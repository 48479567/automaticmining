import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ObjectRefService } from '../../../core/services/schema/object-ref.service';
import { IDialogData } from '../../models';

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
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
  }

  openFormDialog(): void {
    const mainName = this.objectRef.mainName;
    const formDialogRef = this.dialog.open(
      this.objectRef.currentComponentForm, {
        panelClass: 'complete-width',
        data: {
          content: this.itemCreate,
          action: 'post',
          index: this.objectRef.lengthItemsSelected,
          title: mainName,
          max: this.objectRef.lengthItemsSelected + 1,
          selectedValue: this.objectRef.selectValueData[mainName]
        } as IDialogData
    });
  }
}
