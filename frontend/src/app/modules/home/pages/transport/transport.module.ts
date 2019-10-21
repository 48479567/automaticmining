import { TransportComponent } from './transport.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransportRoutingModule } from './transport-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [TransportRoutingModule, CommonModule, SharedModule],
  exports: [],
  declarations: [TransportComponent],
  providers: [],
})
export class TransportModule { }

