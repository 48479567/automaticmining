import { Component, OnInit } from '@angular/core';

import { TruckHttpService } from 'src/app/core/http/schema/truck/truck.http.service';
import { TruckService } from 'src/app/core/services/schema/truck.service';
import { TruckSchema, TruckSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss']
})
export class TruckComponent implements OnInit {
  trucks: TruckSchema[];
  truckCreate: TruckSchemaForm = new TruckSchemaForm();

  constructor(
    private truckHttp: TruckHttpService,
    private truckService: TruckService
  ) { }

  ngOnInit() {
    this.getTrucks();
  }

  getTrucks(): any {
    if (this.truckService.trucks) {
      return this.trucks = this.truckService.trucks;
    }

    this.truckHttp.getTrucks().subscribe(
      (trucks: TruckSchema[]) => this.trucks = trucks
    );
  }

}
