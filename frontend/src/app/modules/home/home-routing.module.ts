import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'carrier',
        loadChildren: () => import('./pages/carrier/carrier.module')
                              .then(mod => mod.CarrierModule)
      },
      { path: 'chequer',
        loadChildren: () => import('./pages/chequer/chequer.module')
                              .then(mod => mod.ChequeModule)
      },
      { path: 'company',
        loadChildren: () => import('./pages/company/company.module')
                              .then(mod => mod.CompanyModule)
      },
      { path: 'location',
        loadChildren: () => import('./pages/location/location.module')
                              .then(mod => mod.LocationModule)
      },
      { path: 'material',
        loadChildren: () => import('./pages/material/material.module')
                              .then(mod => mod.MaterialModule)
      },
      { path: 'price',
        loadChildren: () => import('./pages/price/price.module')
                              .then(mod => mod.PriceModule)
      },
      { path: 'provider',
        loadChildren: () => import('./pages/provider/provider.module')
                              .then(mod => mod.ProviderModule)
      },
      { path: 'travel',
        loadChildren: () => import('./pages/travel/travel.module')
                              .then(mod => mod.TravelModule)
      },
      { path: 'truck',
        loadChildren: () => import('./pages/truck/truck.module')
                              .then(mod => mod.TruckModule)
      },
      { path: 'user',
        loadChildren: () => import('./pages/user/user.module')
                              .then(mod => mod.UserModule)
      },
      {
        path: 'work',
        loadChildren: () => import('./pages/work/work.module')
                              .then(mod => mod.WorkModule)
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
