import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-create',
  template: `
  <h2 mat-dialog-title>Create Item</h2>
  <mat-dialog-content class="mat-typography">
    <app-form-object-question
      #formObj
      [objectItem]="question"
    ></app-form-object-question>
    <div class="mat-elevation-z2"
      *ngIf="formObj.formFromObject.value.image">
      <img [src]="formObj.formFromObject.value.image"/>
    </div>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
  <button mat-button [disabled]="!formObj.formFromObject.valid" (click)="createItem(formObj.formFromObject.value)">Save</button>
  <button mat-button mat-dialog-close>Cancel</button>
  </mat-dialog-actions>
  `
})

export class DialogCreateComponent implements OnInit {
  question = {
    a: 'enter',
    b: 2,
    c: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxbWDRp0uDnhvGkesRkA8DsHUomz2vNr07nD7AEE1_I29izRR6'
  };

  constructor(
    public dialogRef: MatDialogRef<DialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() { }

  createItem(formValue: any) {
    console.log(formValue);
  }
}
