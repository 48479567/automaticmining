import { Component, OnInit } from '@angular/core';

import { TravelHttpService } from 'src/app/core/http/schema/travel/travel.http.service';
import { TravelService } from 'src/app/core/services/schema/travel.service';
import { TravelSchema } from 'src/app/shared/models';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  travels: TravelSchema[];

  constructor(
    private travelHttp: TravelHttpService,
    private travelService: TravelService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): any {
    if (this.travelService.travels) {
      return this.travels = this.travelService.travels;
    }

    this.travelHttp.getCategories().subscribe(
      (travels: TravelSchema[]) => this.travels = travels
    );
  }

}
