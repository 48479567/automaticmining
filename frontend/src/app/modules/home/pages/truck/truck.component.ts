import { Component, OnInit } from '@angular/core';

import { TruckHttpService } from '../../../../core/http/schema/truck.http.service';
import { TruckService } from '../../../../core/services/schema/truck.service';
import { TruckSchema, TruckSchemaForm, ITruck } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss']
})
export class TruckComponent implements OnInit {
  trucks: TruckSchema[];
  truckCreate: TruckSchemaForm = new TruckSchemaForm();
  mainName = 'truck';

  constructor(
    private truckHttp: TruckHttpService,
    private truckService: TruckService,
    private generalService: GeneralService<ITruck>,
    private generalHttp: GeneralHttpService<ITruck>
  ) { }

  ngOnInit() {
    this.getTrucks();
  }

  getTrucks(): any {
    if (this.generalService.data[this.mainName].length) {
      this.trucks = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (trucks: ITruck[]) => this.trucks = trucks
      );
    }
    // if (this.truckService.trucks) {
    //   return this.trucks = this.truckService.trucks;
    // }

    // this.truckHttp.getTrucks().subscribe(
    //   (trucks: TruckSchema[]) => this.trucks = trucks
    // );
  }

}
