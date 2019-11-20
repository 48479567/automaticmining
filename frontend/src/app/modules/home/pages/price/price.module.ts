import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { PriceComponent } from './price.component';


@NgModule({
  declarations: [PriceComponent],
  imports: [
    CommonModule,
    PriceRoutingModule,
    SharedModule,
  ]
})
export class PriceModule { }
