import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckRoutingModule } from './truck-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { TruckComponent } from './truck.component';
import { TruckFormComponent } from './truck-form/truck-form.component';


@NgModule({
  imports: [
    CommonModule,
    TruckRoutingModule,
    SharedModule,
  ],
  declarations: [TruckComponent, TruckFormComponent],
  entryComponents: [TruckFormComponent]
})
export class TruckModule { }
