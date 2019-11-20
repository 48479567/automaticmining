import { Component, OnInit } from '@angular/core';
import { ChequerHttpService } from '../../../../core/http/schema/chequer.http.service';
import { ChequerService } from '../../../../core/services/schema/chequer.service';
import { ChequerSchema, ChequerSchemaForm, IChequer } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';

@Component({
  selector: 'app-chequer',
  templateUrl: './chequer.component.html',
  styleUrls: ['./chequer.component.scss']
})
export class ChequerComponent implements OnInit {
  chequers: ChequerSchema[];
  chequerCreate: ChequerSchemaForm = new ChequerSchemaForm();
  mainName = 'chequer';

  constructor(
    private carrierHttp: ChequerHttpService,
    private carrierService: ChequerService,
    private generalService: GeneralService<IChequer>,
    private generalHttp: GeneralHttpService<IChequer>
  ) { }

  ngOnInit() {
    this.getChequers();
  }

  getChequers(): any {
    if (this.generalService.data[this.mainName]) {
      this.chequers = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (chequers: IChequer[]) => this.chequers = chequers
      );
    }
    // if (this.carrierService.chequers) {
    //   return this.chequers = this.carrierService.chequers;
    // }

    // this.carrierHttp.getChequers().subscribe(
    //   (chequers: ChequerSchema[]) => this.chequers = chequers
    // );
  }

}
