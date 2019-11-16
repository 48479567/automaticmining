import { Component, OnInit } from '@angular/core';
import { DistanceHttpService } from 'src/app/core/http/schema/distance.http.service';
import { DistanceService } from 'src/app/core/services/schema/distance.service';
import { DistanceSchema, DistanceSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {
  distances: DistanceSchema[];
  distanceCreate: DistanceSchemaForm = new DistanceSchemaForm();

  constructor(
    private distanceHttp: DistanceHttpService,
    private distanceService: DistanceService
  ) { }

  ngOnInit() {
    this.getDistances();
  }

  getDistances(): any {
    if (this.distanceService.distances) {
      return this.distances = this.distanceService.distances;
    }

    this.distanceHttp.getDistances().subscribe(
      (distances: DistanceSchema[]) => this.distances = distances
    );
  }

}
