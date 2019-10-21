import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportComponent } from './transport.component';

const routes: Routes = [
  { path: '', component: TransportComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class TransportRoutingModule { }
