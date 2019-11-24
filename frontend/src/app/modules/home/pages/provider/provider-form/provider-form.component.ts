import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormControl, FormBuilder } from '@angular/forms';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from 'src/app/shared/models';

@Component({
  selector: 'app-provider-form',
  templateUrl: './provider-form.component.html',
  styleUrls: ['./provider-form.component.scss']
})

export class ProviderFormComponent implements OnInit {

  form = this.fb.group({
    name: this.fb.control(this.data.content.name,
      v.required),
    phonenumber: this.fb.control(this.data.content.phonenumber,
      [v.required, v.minLength(9)]),
    image: this.fb.control(this.data.content.image)
  });

  get phonenumber(): FormControl {
    return this.form.get('phonenumber') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<ProviderFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) { }

  ngOnInit() {
  }


  save(): void {
    const { title, action, index } = this.data;
    const id = this.data.content._id ? `/${this.data.content._id}` : '';
    this.ghs.saveData(title, action, this.form.value, index, id).subscribe(
      () => this.dialogRef.close()
    );
  }
}
