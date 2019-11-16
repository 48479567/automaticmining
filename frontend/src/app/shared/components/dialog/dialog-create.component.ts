import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogCreateComponent implements OnInit {
  questions: any;

  constructor(
    public dialogRef: MatDialogRef<DialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.questions = this.data.content;
  }

  createItem(formValue: any) {
    console.log(formValue);
  }
}
