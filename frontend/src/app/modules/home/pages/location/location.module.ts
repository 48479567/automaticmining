import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { LocationComponent } from './location.component';
import { LocationFormComponent } from './location-form/location-form.component';


@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule,
    SharedModule,
  ],
  declarations: [LocationComponent, LocationFormComponent],
  entryComponents: [LocationFormComponent]
})
export class LocationModule { }
