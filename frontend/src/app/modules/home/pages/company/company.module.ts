import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';


@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
  ],
  declarations: [CompanyComponent, CompanyFormComponent],
  entryComponents: [CompanyFormComponent]
})
export class CompanyModule { }
