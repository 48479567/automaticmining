import { Component, OnInit } from '@angular/core';
import { CompanyHttpService } from 'src/app/core/http/schema/company.http.service';
import { CompanyService } from 'src/app/core/services/schema/company.service';
import { CompanySchema, CompanySchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies: CompanySchema[];
  companyCreate: CompanySchemaForm = new CompanySchemaForm();

  constructor(
    private companyHttp: CompanyHttpService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): any {
    if (this.companyService.companies) {
      return this.companies = this.companyService.companies;
    }

    this.companyHttp.getCompanies().subscribe(
      (companies: CompanySchema[]) => this.companies = companies
    );
  }

}
