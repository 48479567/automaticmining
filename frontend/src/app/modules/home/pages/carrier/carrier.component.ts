import { Component, OnInit } from '@angular/core';
import { CarrierHttpService } from '../../../../core/http/schema/carrier.http.service';
import { CarrierService } from '../../../../core/services/schema/carrier.service';
import { CarrierSchema, CarrierSchemaForm, ICarrier } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
  carriers: CarrierSchema[];
  mainName = 'carrier';
  carrierCreate: CarrierSchemaForm = new CarrierSchemaForm();

  constructor(
    private carrierHttp: CarrierHttpService,
    private carrierService: CarrierService,
    private generalService: GeneralService<ICarrier>,
    private generalHttp: GeneralHttpService<ICarrier>
  ) { }

  ngOnInit() {
    this.getCarriers();
  }

  getCarriers(): void {
    if (this.generalService.data[this.mainName]) {
      this.carriers = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (carriers: ICarrier[]) => this.carriers = carriers
      );
    }
    // if (this.carrierService.carriers) {
    //   return this.carriers = this.carrierService.carriers;
    // }

    // this.carrierHttp.getCarriers().subscribe(
    //   (carriers: CarrierSchema[]) => this.carriers = carriers
    // );
  }

}
