import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { UserComponent } from './user.component';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  declarations: [UserComponent, UserFormComponent],
  entryComponents: [UserFormComponent]
})
export class UserModule { }
