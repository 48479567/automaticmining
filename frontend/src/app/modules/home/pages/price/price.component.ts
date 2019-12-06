import { Component, OnInit } from '@angular/core';
import { PriceSchema, PriceSchemaForm, IPrice } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ObjectRefService } from '../../../../core/services/schema/object-ref.service';
import { PriceFormComponent } from './price-form/price-form.component';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  prices: PriceSchema[];
  priceCreate: PriceSchemaForm = new PriceSchemaForm();
  displayedColumns = ['materialid', 'local', 'value', 'carrierid'];
  mainName = 'price';

  constructor(
    private generalService: GeneralService<IPrice>,
    private generalHttp: GeneralHttpService<IPrice>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getPrices();
    this.objectRef.currentComponentForm = PriceFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getPrices(): any {
    if (this.generalService.data[this.mainName].length) {
      this.prices = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (prices: IPrice[]) => {
          this.prices = prices;
          this.objectRef.lengthItemsSelected = prices.length;
        }
      );
    }
  }

}
