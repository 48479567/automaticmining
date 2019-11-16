import { Component, OnInit } from '@angular/core';

import { ProviderHttpService } from 'src/app/core/http/schema/provider.http.service';
import { ProviderService } from 'src/app/core/services/schema/provider.service';
import { ProviderSchema, ProviderSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  providers: ProviderSchema[];
  providerCreate: ProviderSchemaForm = new ProviderSchemaForm();

  constructor(
    private providerHttp: ProviderHttpService,
    private providerService: ProviderService
  ) { }

  ngOnInit() {
    this.getProviders();
  }

  getProviders(): any {
    if (this.providerService.providers) {
      return this.providers = this.providerService.providers;
    }

    this.providerHttp.getProviders().subscribe(
      (providers: ProviderSchema[]) => this.providers = providers
    );
  }

}
