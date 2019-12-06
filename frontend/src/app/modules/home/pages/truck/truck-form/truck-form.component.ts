import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { GeneralHttpService } from '../../../../../core/http/schema/general.http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData, ICarrier } from '../../../../../shared/models';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GeneralService } from '../../../../../core/services/schema/general.service';

@Component({
  selector: 'app-truck-form',
  templateUrl: './truck-form.component.html',
  styleUrls: ['./truck-form.component.scss']
})

export class TruckFormComponent implements OnInit {
  carriers: ICarrier[];

  form: FormGroup = this.fb.group({
    carrierid: this.fb.control(this.data.content.carrierid,
      v.required),
    capacity: this.fb.control(this.data.content.capacity,
      v.required),
    mark: this.fb.control(this.data.content.mark,
      v.required),
    plaque: this.fb.control(this.data.content.plaque,
      v.required),
    extension: this.fb.control(this.data.content.extension),
    capacityextension: this.fb.control({
      value: this.data.content.capacityextension,
      disabled: !this.data.content.extension}, v.required),
    status: this.fb.control(this.data.content.status,
      v.required),
    image: this.fb.control(this.data.content.image)
  });


  get extension(): FormControl {
    return this.form.get('extension') as FormControl;
  }
  get capacityextension(): FormControl {
    return this.form.get('capacityextension') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private gs: GeneralService<any>,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<TruckFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) { }

  ngOnInit() {
    this.getCarriers();
    this.formOnChanges();
  }

  getCarriers() {
    if (this.gs.data.carrier.length) {
      this.carriers = this.gs.data.carrier;
      return;
    }
    this.ghs.getData('carrier').subscribe(
      (carriers: ICarrier[]) => this.carriers = carriers
    );
  }

  formOnChanges(): void {
    this.extension.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(
      (valExtension: boolean) => {
        if (valExtension) {
          console.log(valExtension);
          this.capacityextension.enable();
        } else {
          console.log(valExtension);
          this.capacityextension.setValue(0);
          this.capacityextension.disable();
        }
      }
    );
  }


  save(): void {
    const { title, action, index } = this.data;
    const id = this.data.content._id ? `/${this.data.content._id}` : '';
    this.ghs.saveData(title, action, this.form.value, index, id).subscribe(
      () => this.dialogRef.close()
    );
  }
}
