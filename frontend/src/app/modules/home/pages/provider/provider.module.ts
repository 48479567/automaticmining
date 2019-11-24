import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { ProviderComponent } from './provider.component';
import { ProviderFormComponent } from './provider-form/provider-form.component';

@NgModule({
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedModule,
  ],
  declarations: [ProviderComponent, ProviderFormComponent],
  entryComponents: [ProviderFormComponent]
})
export class ProviderModule { }
