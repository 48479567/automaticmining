import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuestionGeneratorService } from 'src/app/core/services/form/question-generator.service';

@Component({
  selector: 'app-dialog-create',
  template: `
  <h2 mat-dialog-title>Create Item</h2>
  <mat-dialog-content class="mat-typography">
    <app-form-object-question
      #formObj
      [objectItem]="questions"
    ></app-form-object-question>
    <div class="mat-elevation-z2"
      *ngIf="formObj.formFromObject.value.image">
      <img [src]="formObj.formFromObject.value.image"/>
    </div>
  </mat-dialog-content>
  <mat-dialog-actions align="end">
  <button mat-button
    [disabled]="!formObj.formFromObject.valid"
    (click)="createItem(formObj.formFromObject.value)">Save</button>
  <button mat-button mat-dialog-close>Cancel</button>
  </mat-dialog-actions>
  `
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
