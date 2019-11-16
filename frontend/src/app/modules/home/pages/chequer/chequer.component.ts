import { Component, OnInit } from '@angular/core';
import { ChequerHttpService } from 'src/app/core/http/schema/chequer.http.service';
import { ChequerService } from 'src/app/core/services/schema/chequer.service';
import { ChequerSchema, ChequerSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-chequer',
  templateUrl: './chequer.component.html',
  styleUrls: ['./chequer.component.scss']
})
export class ChequerComponent implements OnInit {
  chequers: ChequerSchema[];
  chequerCreate: ChequerSchemaForm = new ChequerSchemaForm();

  constructor(
    private carrierHttp: ChequerHttpService,
    private carrierService: ChequerService
  ) { }

  ngOnInit() {
    this.getChequers();
  }

  getChequers(): any {
    if (this.carrierService.chequers) {
      return this.chequers = this.carrierService.chequers;
    }

    this.carrierHttp.getChequers().subscribe(
      (chequers: ChequerSchema[]) => this.chequers = chequers
    );
  }

}
