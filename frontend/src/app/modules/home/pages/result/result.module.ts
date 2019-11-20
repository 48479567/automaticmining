import { NgModule } from '@angular/core';
import { ResultRoutingModule } from './result-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared.module';
import { ResultComponent } from './result.component';


@NgModule({
  declarations: [ResultComponent],
  imports: [
    ResultRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ResultModule { }
