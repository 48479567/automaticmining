import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChequerComponent } from './chequer.component';

const routes: Routes = [
  { path: '', component: ChequerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ChequerRoutingModule { }
