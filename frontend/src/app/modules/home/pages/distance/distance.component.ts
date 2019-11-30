import { Component, OnInit } from '@angular/core';
import { DistanceSchema, DistanceSchemaForm, IDistance } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { DistanceFormComponent } from './distance-form/distance-form.component';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {
  distances: DistanceSchema[];
  distanceCreate: DistanceSchemaForm = new DistanceSchemaForm();
  displayedColumns = ['origin', 'destiny', 'value'];
  mainName = 'distance';

  constructor(
    private generalService: GeneralService<IDistance>,
    private generalHttp: GeneralHttpService<IDistance>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getDistances();
    this.objectRef.mainName = this.mainName;
    this.objectRef.currentComponentForm = DistanceFormComponent;
  }

  getDistances(): any {
    if (this.generalService.data[this.mainName].length) {
      this.distances = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (distances: IDistance[]) => {
          this.distances = distances;
          this.objectRef.lengthItemsSelected = distances.length;
        }
      );
    }
  }

}
