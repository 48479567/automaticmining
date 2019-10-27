import { Component, OnInit } from '@angular/core';
import { CompanyHttpService } from 'src/app/core/http/schema/company/company.http.service';
import { CompanyService } from 'src/app/core/services/schema/company.service';
import { CompanySchema } from 'src/app/shared/models';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companies: CompanySchema[];

  constructor(
    private companyHttp: CompanyHttpService,
    private companyService: CompanyService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): any {
    if (this.companyService.companies) {
      return this.companies = this.companyService.companies;
    }

    this.companyHttp.getCategories().subscribe(
      (companies: CompanySchema[]) => this.companies = companies
    );
  }

}
