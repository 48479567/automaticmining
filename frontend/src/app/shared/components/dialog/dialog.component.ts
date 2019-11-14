import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormDialogData } from '../../models/dialog/dialog.model';
import { QuestionBase } from '../../models';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-create-resource.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogCreateResourceComponent implements OnInit {
  questions: QuestionBase<any>[];

  constructor(
    public dialogRef: MatDialogRef<DialogCreateResourceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData,
    private ors: ObjectRefService
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questions = this.ors.formatQuestion(this.data.content, this.ors.objectRef);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  isTypeOfObject(value: any): boolean {
    return typeof value === 'object';
  }

  createItem(value: any): void {
    this.ors.selectSchema.http.createItem(value).subscribe();
  }
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  questions: QuestionBase<any>[];

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData,
    private ors: ObjectRefService
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questions = this.ors.formatQuestion(this.data.content, this.ors.objectRef);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  isTypeOfObject(value: any): boolean {
    return typeof value === 'object';
  }

  updateItem(value: any): void {
    const id = this.data.content._id;
    const { index } = this.data;

    this.ors.selectSchema.http.updateItem(id, value).subscribe(
      (data: any) => {
        this.ors.selectSchema.service.items[index] = data;
        this.onClose();
    });
  }

}
