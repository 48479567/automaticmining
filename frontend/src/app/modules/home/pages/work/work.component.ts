import { Component, OnInit } from '@angular/core';

import { WorkHttpService } from '../../../../core/http/schema/work.http.service';
import { WorkService } from '../../../../core/services/schema/work.service';
import { WorkSchema, WorkSchemaForm, IWork, ICarrier } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works: WorkSchema[];
  workCreate: WorkSchemaForm = new WorkSchemaForm();
  mainName = 'work';

  constructor(
    private workHttp: WorkHttpService,
    private workService: WorkService,
    private generalService: GeneralService<IWork>,
    private generalHttp: GeneralHttpService<IWork>
  ) { }

  ngOnInit() {
    this.getWorks();
  }

  getWorks(): any {
    if (this.generalService.data[this.mainName]) {
      this.works = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (works: IWork[]) => this.works = works
      );
    }
    // if (this.workService.works) {
    //   return this.works = this.workService.works;
    // }

    // this.workHttp.getWorks().subscribe(
    //   (works: WorkSchema[]) => this.works = works
    // );
  }

}
