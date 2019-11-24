import { Component, OnInit } from '@angular/core';
import { WorkSchema, WorkSchemaForm, IWork } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { WorkFormComponent } from './work-form/work-form.component';

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
    private generalService: GeneralService<IWork>,
    private generalHttp: GeneralHttpService<IWork>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getWorks();
    this.objectRef.currentComponentForm = WorkFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getWorks(): any {
    if (this.generalService.data[this.mainName].length) {
      this.works = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (works: IWork[]) => {
          this.works = works;
          this.objectRef.lengthItemsSelected = works.length;
        }
      );
    }
  }

}
