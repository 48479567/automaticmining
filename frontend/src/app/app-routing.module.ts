import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SignupComponent,
  SigninComponent
} from './modules/home/pages/authentication';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home',
  loadChildren: () => import('./modules/home/home.module')
                        .then(mod => mod.HomeModule) },
  { path: '', redirectTo: 'home/product', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

