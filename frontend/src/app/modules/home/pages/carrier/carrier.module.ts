import { NgModule } from '@angular/core';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierComponent } from './carrier.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CarrierRoutingModule, CommonModule, SharedModule],
  exports: [],
  declarations: [CarrierComponent],
  providers: [],
})
export class CarrierModule { }
