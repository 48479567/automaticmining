import { Component, OnInit } from '@angular/core';
import { CompanyHttpService } from '../../../../core/http/schema/company.http.service';
import { CompanyService } from '../../../../core/services/schema/company.service';
import { CompanySchema, CompanySchemaForm, ICompany } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies: CompanySchema[];
  companyCreate: CompanySchemaForm = new CompanySchemaForm();
  mainName = 'company';

  constructor(
    private companyHttp: CompanyHttpService,
    private companyService: CompanyService,
    private generalService: GeneralService<ICompany>,
    private generalHttp: GeneralHttpService<ICompany>
  ) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): any {
    if (this.generalService.data[this.mainName]) {
      this.companies = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (companies: ICompany[]) => this.companies = companies
      );
    }
    // if (this.companyService.companies) {
    //   return this.companies = this.companyService.companies;
    // }

    // this.companyHttp.getCompanies().subscribe(
    //   (companies: CompanySchema[]) => this.companies = companies
    // );
  }

}
