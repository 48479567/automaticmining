import { Component, OnInit } from '@angular/core';
import { DistanceHttpService } from '../../../../core/http/schema/distance.http.service';
import { DistanceService } from '../../../../core/services/schema/distance.service';
import { DistanceSchema, DistanceSchemaForm, IDistance } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {
  distances: DistanceSchema[];
  distanceCreate: DistanceSchemaForm = new DistanceSchemaForm();
  mainName = 'distance';

  constructor(
    private distanceHttp: DistanceHttpService,
    private distanceService: DistanceService,
    private generalService: GeneralService<IDistance>,
    private generalHttp: GeneralHttpService<IDistance>
  ) { }

  ngOnInit() {
    this.getDistances();
  }

  getDistances(): any {
    if (this.generalService.data[this.mainName].length) {
      this.distances = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (distances: IDistance[]) => this.distances = distances
      );
    }
    // if (this.distanceService.distances) {
    //   return this.distances = this.distanceService.distances;
    // }

    // this.distanceHttp.getDistances().subscribe(
    //   (distances: DistanceSchema[]) => this.distances = distances
    // );
  }

}
