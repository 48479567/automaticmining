import { Component, OnInit } from '@angular/core';
import { TravelSchema, TravelSchemaForm, ITravel } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ObjectRefService } from '../../../../core/services/schema/object-ref.service';
import { TravelFormComponent } from './travel-form/travel-form.component';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  travels: TravelSchema[];
  travelCreate: TravelSchemaForm = new TravelSchemaForm();
  displayedColumns = ['priceid', 'firstprice', 'aditionalprice', 'name', 'status'];
  mainName = 'travel';

  constructor(
    private generalService: GeneralService<ITravel>,
    private generalHttp: GeneralHttpService<ITravel>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getTravels();
    this.objectRef.currentComponentForm = TravelFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getTravels(): any {
    if (this.generalService.data[this.mainName].length) {
      this.travels = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (travels: ITravel[]) => {
          this.travels = travels;
          this.objectRef.lengthItemsSelected = travels.length;
        }
      );
    }
  }

}
