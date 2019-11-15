import { Component, OnInit } from '@angular/core';
import { CarrierHttpService } from 'src/app/core/http/schema/carrier/carrier.http.service';
import { CarrierService } from 'src/app/core/services/schema/carrier.service';
import { CarrierSchema, CarrierSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
  carriers: CarrierSchema[];
  carriersCreate: CarrierSchemaForm = new CarrierSchemaForm();

  constructor(
    private carrierHttp: CarrierHttpService,
    private carrierService: CarrierService
  ) { }

  ngOnInit() {
    this.getCategories();
    console.log('carriersCreate', this.carriersCreate);
  }

  getCategories(): any {
    if (this.carrierService.carriers) {
      return this.carriers = this.carrierService.carriers;
    }

    this.carrierHttp.getCategories().subscribe(
      (carriers: CarrierSchema[]) => this.carriers = carriers
    );
  }

}
