import { Component, OnInit } from '@angular/core';
import { ProviderSchema, ProviderSchemaForm, IProvider } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ObjectRefService } from '../../../../core/services/schema/object-ref.service';
import { ProviderFormComponent } from './provider-form/provider-form.component';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  providers: ProviderSchema[];
  providerCreate: ProviderSchemaForm = new ProviderSchemaForm();
  displayedColums = ['name', 'phonenumber'];
  mainName = 'provider';

  constructor(
    private generalService: GeneralService<IProvider>,
    private generalHttp: GeneralHttpService<IProvider>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getProviders();
    this.objectRef.currentComponentForm = ProviderFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getProviders(): any {
    if (this.generalService.data[this.mainName].length) {
      this.providers = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (providers: IProvider[]) => {
          this.providers = providers;
          this.objectRef.lengthItemsSelected = providers.length;
        }
      );
    }
  }

}
