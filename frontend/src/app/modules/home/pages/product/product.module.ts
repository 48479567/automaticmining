import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [ProductRoutingModule, CommonModule, SharedModule],
  exports: [],
  declarations: [ProductComponent],
  providers: [],
})
export class ProductModule { }
