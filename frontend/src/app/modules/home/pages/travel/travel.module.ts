import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TravelComponent } from './travel.component';


@NgModule({
  declarations: [TravelComponent],
  imports: [
    CommonModule,
    TravelRoutingModule,
    SharedModule,
  ]
})
export class TravelModule { }
