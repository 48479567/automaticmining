import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { MaterialComponent } from './material.component';
import { MaterialFormComponent } from './material-form/material-form.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialRoutingModule,
    SharedModule,
  ],
  declarations: [MaterialComponent, MaterialFormComponent],
  entryComponents: [MaterialFormComponent]
})
export class MaterialModule { }
