import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeComponent } from './home.component';
import { HeaderComponent, FooterComponent, SidebarComponent } from './partials';

const COMPONENTS = [
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  SidebarComponent,

];

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule, ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [],
})
export class HomeModule { }
