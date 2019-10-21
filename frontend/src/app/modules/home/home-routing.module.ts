import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      {
        path: 'work',
        loadChildren: () => import('./pages/work/work.module')
                              .then(mod => mod.WorkModule)
      },
      { path: 'transport',
        loadChildren: () => import('./pages/transport/transport.module')
                              .then(mod => mod.TransportModule)
      },
      { path: 'chequer',
        loadChildren: () => import('./pages/chequer/chequer.module')
                              .then(mod => mod.ChequerModule)
      },
      { path: 'carrier',
        loadChildren: () => import('./pages/carrier/carrier.module')
                              .then(mod => mod.CarrierModule)
      },
      {
        path: 'result',
        loadChildren: () => import('./pages/result/result.module')
                              .then(mod => mod.ResultModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
