import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CarrierComponent } from './carrier.component';
import { CreateCarrierComponent } from './create-carrier/create-carrier.component';


@NgModule({
  declarations: [CarrierComponent, CreateCarrierComponent],
  imports: [
    CommonModule,
    CarrierRoutingModule,
    SharedModule,
  ]
})
export class CarrierModule { }
