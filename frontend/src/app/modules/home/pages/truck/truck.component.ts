import { Component, OnInit } from '@angular/core';
import { TruckSchema, TruckSchemaForm, ITruck } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { TruckFormComponent } from './truck-form/truck-form.component';

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
    private generalService: GeneralService<ITruck>,
    private generalHttp: GeneralHttpService<ITruck>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getTrucks();
    this.objectRef.currentComponentForm = TruckFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getTrucks(): any {
    if (this.generalService.data[this.mainName].length) {
      this.trucks = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (trucks: ITruck[]) => {
          this.trucks = trucks;
          this.objectRef.lengthItemsSelected = trucks.length;
        }
      );
    }
  }

}
