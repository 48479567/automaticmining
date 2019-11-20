import { Component, OnInit } from '@angular/core';

import { TravelHttpService } from '../../../../core/http/schema/travel.http.service';
import { TravelService } from '../../../../core/services/schema/travel.service';
import { TravelSchema, TravelSchemaForm, ITravel } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  travels: TravelSchema[];
  travelCreate: TravelSchemaForm = new TravelSchemaForm();
  mainName = 'travel';

  constructor(
    private travelHttp: TravelHttpService,
    private travelService: TravelService,
    private generalService: GeneralService<ITravel>,
    private generalHttp: GeneralHttpService<ITravel>
  ) { }

  ngOnInit() {
    this.getTravels();
  }

  getTravels(): any {
    if (this.generalService.data[this.mainName]) {
      this.travels = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (travels: ITravel[]) => this.travels = travels
      );
    }
    // if (this.travelService.travels) {
    //   return this.travels = this.travelService.travels;
    // }

    // this.travelHttp.getTravels().subscribe(
    //   (travels: TravelSchema[]) => this.travels = travels
    // );
  }

}
