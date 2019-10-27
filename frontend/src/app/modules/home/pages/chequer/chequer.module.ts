import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChequerRoutingModule } from './chequer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChequerComponent } from './chequer.component';


@NgModule({
  declarations: [ChequerComponent],
  imports: [
    CommonModule,
    ChequerRoutingModule,
    SharedModule,
  ]
})
export class ChequeModule { }
