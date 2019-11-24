import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormControl, FormBuilder } from '@angular/forms';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from 'src/app/shared/models';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})

export class MaterialFormComponent implements OnInit {

  form = this.fb.group({
    name: this.fb.control(this.data.content.name,
      v.required),
    ruc: this.fb.control(this.data.content.ruc,
      [v.required, v.minLength(11)]),
    image: this.fb.control(this.data.content.image)
  });

  get ruc(): FormControl {
    return this.form.get('ruc') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<MaterialFormComponent>,
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
