import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { WorkComponent } from './work.component';
import { WorkFormComponent } from './work-form/work-form.component';


@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
    SharedModule,
  ],
  declarations: [WorkComponent, WorkFormComponent],
  entryComponents: [WorkFormComponent]
})
export class WorkModule { }
