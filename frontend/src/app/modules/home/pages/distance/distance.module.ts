import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { DistanceRoutingModule } from './distance-routing.module';
import { DistanceComponent } from './distance.component';


@NgModule({
  declarations: [DistanceComponent],
  imports: [
    CommonModule,
    DistanceRoutingModule,
    SharedModule,
  ]
})
export class DistanceModule { }
