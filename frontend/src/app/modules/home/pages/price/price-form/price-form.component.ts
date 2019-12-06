import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormControl, FormBuilder } from '@angular/forms';
import { GeneralHttpService } from '../../../../../core/http/schema/general.http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData, IMaterial, ICarrier } from '../../../../../shared/models';
import { GeneralService } from '../../../../../core/services/schema/general.service';

@Component({
  selector: 'app-price-form',
  templateUrl: './price-form.component.html',
  styleUrls: ['./price-form.component.scss']
})

export class PriceFormComponent implements OnInit {
  materials: IMaterial[];
  carriers: ICarrier[];

  form = this.fb.group({
    materialid: this.fb.control(this.data.content.materialid,
      v.required),
    local: this.fb.control(this.data.content.local,
      v.required),
    value: this.fb.control(this.data.content.value,
      v.required),
    carrierid: this.fb.control(this.data.content.carrierid,
      v.required),
    image: this.fb.control(this.data.content.image)
  });

  constructor(
    private fb: FormBuilder,
    private gs: GeneralService<any>,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<PriceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) { }

  ngOnInit() {
    this.getMaterials();
    this.getCarriers();
  }

  getMaterials(): void {
    if (this.gs.data.material.length) {
      this.materials = this.gs.data.material;
      return;
    }
    this.ghs.getData('material').subscribe(
      (materials: IMaterial[]) => this.materials = materials
    );
  }

  getCarriers(): void {
    if (this.gs.data.carrier.length) {
      this.carriers = this.gs.data.carrier;
      return;
    }
    this.ghs.getData('carrier').subscribe(
      (carriers: ICarrier[]) => this.carriers = carriers
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
