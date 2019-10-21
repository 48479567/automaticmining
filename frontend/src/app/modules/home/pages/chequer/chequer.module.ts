import { NgModule } from '@angular/core';

import { ChequerRoutingModule } from './chequer-routing.module';
import { ChequerComponent } from './chequer.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [ChequerRoutingModule, CommonModule, SharedModule],
  exports: [],
  declarations: [ChequerComponent],
  providers: [],
})
export class ChequerModule { }

