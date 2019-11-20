import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { LocationComponent } from './location.component';


@NgModule({
  declarations: [LocationComponent],
  imports: [
    CommonModule,
    LocationRoutingModule,
    SharedModule,
  ]
})
export class LocationModule { }
