import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormControl, FormBuilder } from '@angular/forms';
import { GeneralHttpService } from '../../../../../core/http/schema/general.http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData, ILocation } from '../../../../../shared/models';
import { GeneralService } from '../../../../../core/services/schema/general.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-distance-form',
  templateUrl: './distance-form.component.html',
  styleUrls: ['./distance-form.component.scss']
})

export class DistanceFormComponent implements OnInit {
  locations: ILocation[];

  form = this.fb.group({
    origin: this.fb.control(this.data.content.origin,
      v.required),
    destiny: this.fb.control(this.data.content.destiny,
      v.required),
    value: this.fb.control(this.data.content.value,
      v.required),
    image: this.fb.control(this.data.content.image)
  });

  get origin(): FormControl {
    return this.form.get('origin') as FormControl;
  }

  get destiny(): FormControl {
    return this.form.get('destiny') as FormControl;
  }

  destinyInfo = {
    errorMessage: 'Destiny is Required!!'
  };
  OriginInfo = {
    errorMessage: 'Origin is Required!!'
  };

  constructor(
    private fb: FormBuilder,
    private gs: GeneralService<any>,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<DistanceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) { }

  ngOnInit() {
    this.getLocations();
    // this.formOnChanges();
  }

  getLocations(): void {
    if (this.gs.data.location.length) {
      this.locations = this.gs.data.location;
      return;
    }
    this.ghs.getData('location').subscribe(
      (locations: ILocation[]) => this.locations = locations
    );
  }

  // formOnChanges(): void {
    // this.form.valueChanges.pipe(
    //   debounceTime(2000),
    //   distinctUntilChanged(),
    // ).subscribe(
    //   () => {
    //     const destinyValue = 'destiny';
    //     const originValue = 'origin';
    //     if (this.origin.value === this.destiny.value) {
    //       this.destinyInfo.errorMessage = 'Destiny has to be different from the Origin!!';
    //       this.OriginInfo.errorMessage = 'Origin has to be different from the Destiny!!';
    //       this.form.controls[destinyValue].setErrors({ incorrect : true });
    //       this.form.controls[originValue].setErrors({ incorrect : true });
    //     } else {
    //       this.form.controls[destinyValue].setErrors(null);
    //       this.form.controls[originValue].setErrors(null);
    //     }
    //   }
    // );
  // }

  save(): void {
    const { title, action, index } = this.data;
    const id = this.data.content._id ? `/${this.data.content._id}` : '';
    this.ghs.saveData(title, action, this.form.value, index, id).subscribe(
      () => this.dialogRef.close()
    );
  }
}
