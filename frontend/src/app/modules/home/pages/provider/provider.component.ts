import { Component, OnInit } from '@angular/core';

import { ProviderHttpService } from 'src/app/core/http/schema/provider/provider.http.service';
import { ProviderService } from 'src/app/core/services/schema/provider.service';
import { ProviderSchema } from 'src/app/shared/models';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  providers: ProviderSchema[];

  constructor(
    private providerHttp: ProviderHttpService,
    private providerService: ProviderService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): any {
    if (this.providerService.providers) {
      return this.providers = this.providerService.providers;
    }

    this.providerHttp.getCategories().subscribe(
      (providers: ProviderSchema[]) => this.providers = providers
    );
  }

}
