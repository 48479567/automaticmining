import { Component, OnInit } from '@angular/core';
import { ChequerSchema, ChequerSchemaForm, IChequer } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ObjectRefService } from '../../../../core/services/schema/object-ref.service';
import { ChequerFormComponent } from './chequer-form/chequer-form.component';

@Component({
  selector: 'app-chequer',
  templateUrl: './chequer.component.html',
  styleUrls: ['./chequer.component.scss']
})
export class ChequerComponent implements OnInit {
  chequers: ChequerSchema[];
  chequerCreate: ChequerSchemaForm = new ChequerSchemaForm();
  displayedColumns = ['username', 'fullname', 'status'];
  mainName = 'chequer';

  constructor(
    private generalService: GeneralService<IChequer>,
    private generalHttp: GeneralHttpService<IChequer>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getChequers();
    this.objectRef.currentComponentForm = ChequerFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getChequers(): any {
    if (this.generalService.data[this.mainName].length) {
      this.chequers = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(

        (chequers: IChequer[]) => {
          this.chequers = chequers;
          this.objectRef.lengthItemsSelected = chequers.length;
        }
      );
    }
  }

}
