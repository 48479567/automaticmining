import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../shared/shared.module';
import { DistanceRoutingModule } from './distance-routing.module';
import { DistanceComponent } from './distance.component';
import { DistanceFormComponent } from './distance-form/distance-form.component';

@NgModule({
  imports: [
    CommonModule,
    DistanceRoutingModule,
    SharedModule,
  ],
  declarations: [DistanceComponent, DistanceFormComponent],
  entryComponents: [DistanceFormComponent]
})
export class DistanceModule { }
