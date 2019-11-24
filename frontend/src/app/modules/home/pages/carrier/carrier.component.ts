import { Component, OnInit } from '@angular/core';
import { CarrierSchema, CarrierSchemaForm, ICarrier } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { CarrierFormComponent } from './carrier-form/carrier-form.component';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.scss']
})
export class CarrierComponent implements OnInit {
  carriers: CarrierSchema[];
  mainName = 'carrier';
  carrierCreate: CarrierSchemaForm = new CarrierSchemaForm();
  displayedColumns = ['fullname', 'providerid', 'ruc', 'address', 'phonenumber', 'email'];


  constructor(
    private generalService: GeneralService<ICarrier>,
    private generalHttp: GeneralHttpService<ICarrier>,
    private objectRef: ObjectRefService
  ) {
  }

  ngOnInit() {
    this.getCarriers();
    this.objectRef.currentComponentForm = CarrierFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getCarriers(): void {
    if (this.generalService.data[this.mainName].length) {
      this.carriers = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (carriers: ICarrier[]) => {
          this.carriers = carriers;
          this.objectRef.lengthItemsSelected = carriers.length;
        }
      );
    }
  }
}
