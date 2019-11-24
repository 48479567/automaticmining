import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { PriceComponent } from './price.component';
import { PriceFormComponent } from './price-form/price-form.component';

@NgModule({
  imports: [
    CommonModule,
    PriceRoutingModule,
    SharedModule,
  ],
  declarations: [PriceComponent, PriceFormComponent],
  entryComponents: [PriceFormComponent]
})
export class PriceModule { }
