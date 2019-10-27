import { Component, OnInit } from '@angular/core';

import { TruckHttpService } from 'src/app/core/http/schema/truck/truck.http.service';
import { TruckService } from 'src/app/core/services/schema/truck.service';
import { TruckSchema } from 'src/app/shared/models';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss']
})
export class TruckComponent implements OnInit {
  trucks: TruckSchema[];

  constructor(
    private truckHttp: TruckHttpService,
    private truckService: TruckService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): any {
    if (this.truckService.trucks) {
      return this.trucks = this.truckService.trucks;
    }

    this.truckHttp.getCategories().subscribe(
      (trucks: TruckSchema[]) => this.trucks = trucks
    );
  }

}
