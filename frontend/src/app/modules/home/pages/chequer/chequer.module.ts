import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChequerRoutingModule } from './chequer-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ChequerComponent } from './chequer.component';
import { ChequerFormComponent } from './chequer-form/chequer-form.component';


@NgModule({
  imports: [
    CommonModule,
    ChequerRoutingModule,
    SharedModule,
  ],
  declarations: [ChequerComponent, ChequerFormComponent],
  entryComponents: [ChequerFormComponent]
})
export class ChequeModule { }
