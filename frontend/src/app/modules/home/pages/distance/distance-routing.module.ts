import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistanceComponent } from './distance.component';

const routes: Routes = [
  { path: '', component: DistanceComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class DistanceRoutingModule { }
