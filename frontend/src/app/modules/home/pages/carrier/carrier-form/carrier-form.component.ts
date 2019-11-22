import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators as v, FormControl } from '@angular/forms';
import { CarrierSchemaForm, IProvider } from 'src/app/shared/models';
import { GeneralService } from 'src/app/core/services/schema/general.service';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-carrier-form',
  templateUrl: './carrier-form.component.html',
  styleUrls: ['./carrier-form.component.scss']
})
export class CarrierFormComponent implements OnInit {
  @Input() values: CarrierSchemaForm;
  providers: IProvider[];

  form = this.fb.group({
    fullname: this.fb.control(this.data.content.fullname, v.required),
    providerid: this.fb.control(this.data.content.providerid, v.required),
    ruc: this.fb.control(this.data.content.ruc, [v.required, v.minLength(11)]),
    address: this.fb.control(this.data.content.address),
    phonenumber: this.fb.control(this.data.content.phonenumber, v.minLength(9)),
    email: this.fb.control(this.data.content.email, [v.required, v.minLength(8)]),
    image: this.fb.control(this.data.content.image)
  });

  get ruc(): FormControl {
    return this.form.get('ruc') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }


  constructor(
    private fb: FormBuilder,
    private gs: GeneralService<any>,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<CarrierFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.getProviders();
    console.log(this.data);
    this.values = this.data.content;
  }

  getProviders() {
    if (this.gs.data.provider.length) {
      this.providers = this.gs.data.provider;
    } else {
      this.ghs.getData('provider').subscribe(
        (providers: IProvider[]) => this.providers = providers
      );
    }
  }

}
