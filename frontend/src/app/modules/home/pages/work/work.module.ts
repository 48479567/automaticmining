import { NgModule } from '@angular/core';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [WorkRoutingModule, CommonModule, SharedModule],
  exports: [],
  declarations: [WorkComponent],
  providers: [],
})
export class WorkModule { }
