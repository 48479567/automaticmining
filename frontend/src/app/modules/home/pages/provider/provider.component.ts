import { Component, OnInit } from '@angular/core';

import { ProviderHttpService } from 'src/app/core/http/schema/provider.http.service';
import { ProviderService } from 'src/app/core/services/schema/provider.service';
import { ProviderSchema, ProviderSchemaForm, IProvider } from 'src/app/shared/models';
import { GeneralService } from 'src/app/core/services/schema/general.service';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  providers: ProviderSchema[];
  providerCreate: ProviderSchemaForm = new ProviderSchemaForm();
  mainName = 'provider';

  constructor(
    private providerHttp: ProviderHttpService,
    private providerService: ProviderService,
    private generalService: GeneralService<IProvider>,
    private generalHttp: GeneralHttpService<IProvider>
  ) { }

  ngOnInit() {
    this.getProviders();
  }

  getProviders(): any {
    if (this.generalService.data[this.mainName]) {
      this.providers = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (providers: IProvider[]) => this.providers = providers
      );
    }
    // if (this.providerService.providers) {
    //   return this.providers = this.providerService.providers;
    // }

    // this.providerHttp.getProviders().subscribe(
    //   (providers: ProviderSchema[]) => this.providers = providers
    // );
  }

}
