import { Component, OnInit } from '@angular/core';
import { CompanySchema, CompanySchemaForm, ICompany } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { CompanyFormComponent } from './company-form/company-form.component';
import { ObjectRefService } from '../../../../core/services/schema/object-ref.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies: CompanySchema[];
  companyCreate: CompanySchemaForm = new CompanySchemaForm();
  displayedColumns = ['name', 'ruc'];
  mainName = 'company';

  constructor(
    private generalService: GeneralService<ICompany>,
    private generalHttp: GeneralHttpService<ICompany>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getCompanies();
    this.objectRef.currentComponentForm = CompanyFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getCompanies(): any {
    if (this.generalService.data[this.mainName].length) {
      this.companies = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (companies: ICompany[]) => {
          this.companies = companies;
          this.objectRef.lengthItemsSelected = companies.length;
        }
      );
    }
  }

}
