import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormControl, FormBuilder } from '@angular/forms';
import { GeneralHttpService } from '../../../../../core/http/schema/general.http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData, IPrice } from '../../../../../shared/models';
import { GeneralService } from '../../../../../core/services/schema/general.service';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss']
})

export class TravelFormComponent implements OnInit {
  prices: IPrice[];

  form = this.fb.group({
    priceid: this.fb.control(this.data.content.priceid,
      v.required),
    firstprice: this.fb.control(this.data.content.firstprice,
      v.required),
    aditionalprice: this.fb.control(this.data.content.aditionalprice,
      v.required),
    name: this.fb.control(this.data.content.name,
      v.required),
    status: this.fb.control(this.data.content.status,
      v.required),
    image: this.fb.control(this.data.content.image)
  });

  constructor(
    private fb: FormBuilder,
    private gs: GeneralService<any>,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<TravelFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) { }

  ngOnInit() {
    this.getPrices();
  }

  getPrices(): void {
    if (this.gs.data.price.length) {
      this.prices = this.gs.data.price;
      return;
    }
    this.ghs.getData('price').subscribe(
      (prices: IPrice[]) => this.prices = prices
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
