import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CarrierComponent } from './carrier.component';
import { CarrierFormComponent } from './carrier-form/carrier-form.component';

@NgModule({
  declarations: [CarrierComponent, CarrierFormComponent],
  entryComponents: [CarrierFormComponent],
  imports: [
    CommonModule,
    CarrierRoutingModule,
    SharedModule,
  ]
})
export class CarrierModule { }
