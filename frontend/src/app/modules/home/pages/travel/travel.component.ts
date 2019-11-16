import { Component, OnInit } from '@angular/core';

import { TravelHttpService } from 'src/app/core/http/schema/travel.http.service';
import { TravelService } from 'src/app/core/services/schema/travel.service';
import { TravelSchema, TravelSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  travels: TravelSchema[];
  travelCreate: TravelSchemaForm = new TravelSchemaForm();

  constructor(
    private travelHttp: TravelHttpService,
    private travelService: TravelService
  ) { }

  ngOnInit() {
    this.getTravels();
  }

  getTravels(): any {
    if (this.travelService.travels) {
      return this.travels = this.travelService.travels;
    }

    this.travelHttp.getTravels().subscribe(
      (travels: TravelSchema[]) => this.travels = travels
    );
  }

}
