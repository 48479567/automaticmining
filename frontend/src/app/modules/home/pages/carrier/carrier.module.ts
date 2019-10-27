import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarrierComponent } from './carrier.component';


@NgModule({
  declarations: [CarrierComponent],
  imports: [
    CommonModule,
    CarrierRoutingModule,
    SharedModule,
  ]
})
export class CarrierModule { }
