import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { TravelComponent } from './travel.component';
import { TravelFormComponent } from './travel-form/travel-form.component';


@NgModule({
  imports: [
    CommonModule,
    TravelRoutingModule,
    SharedModule,
  ],
  declarations: [TravelComponent, TravelFormComponent],
  entryComponents: [TravelFormComponent]
})
export class TravelModule { }
