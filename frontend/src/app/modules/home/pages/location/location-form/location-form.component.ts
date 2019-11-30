import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormControl, FormBuilder } from '@angular/forms';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from 'src/app/shared/models';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})

export class LocationFormComponent implements OnInit {

  form = this.fb.group({
    name: this.fb.control(this.data.content.name,
      v.required),
    mine: this.fb.control(this.data.content.mine,
      v.required),
    latitude: this.fb.control(this.data.content.latitude,
      [v.required, v.min(-90), v.max(90)]),
    longitude: this.fb.control(this.data.content.longitude,
      [v.required, v.min(-180), v.max(180)]),
    status: this.fb.control(this.data.content.status,
      v.required),
    image: this.fb.control(this.data.content.image)
  });

  get latitude(): FormControl {
    return this.form.get('latitude') as FormControl;
  }
  get length(): FormControl {
    return this.form.get('length') as FormControl;
  }

  // isInsideTheRange(limit: number, value: number): boolean {
  //   return value >= -limit && value <= limit;
  // }

  constructor(
    private fb: FormBuilder,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<LocationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) { }

  ngOnInit() {
    // this.formOnChanges();
  }

  // formOnChanges(): void {
  //   this.latitude.valueChanges.pipe(
  //     debounceTime(1000),
  //     distinctUntilChanged(),
  //   ).subscribe(
  //     (valLatitude: number) => {
  //       if (!this.isInsideTheRange(90, valLatitude)) {
  //         const latitudeValue = 'latitude';
  //         this.form.controls[latitudeValue].setErrors({ incorrect : true });
  //       }
  //     }
  //   );
  //   this.length.valueChanges.pipe(
  //     debounceTime(1000),
  //     distinctUntilChanged(),
  //   ).subscribe(
  //     (valLength: number) => {
  //       if (!this.isInsideTheRange(180, valLength)) {
  //         const lengthValue = 'length';
  //         this.form.controls[lengthValue].setErrors({ incorrect : true });
  //       }
  //     }
  //   );
  // }

  save(): void {
    const { title, action, index } = this.data;
    const id = this.data.content._id ? `/${this.data.content._id}` : '';
    this.ghs.saveData(title, action, this.form.value, index, id).subscribe(
      () => this.dialogRef.close()
    );
  }
}
