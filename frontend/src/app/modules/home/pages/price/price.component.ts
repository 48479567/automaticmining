import { Component, OnInit } from '@angular/core';
import { PriceHttpService } from 'src/app/core/http/schema/price.http.service';
import { PriceService } from 'src/app/core/services/schema/price.service';
import { PriceSchema, PriceSchemaForm, IPrice } from 'src/app/shared/models';
import { GeneralService } from 'src/app/core/services/schema/general.service';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  prices: PriceSchema[];
  priceCreate: PriceSchemaForm = new PriceSchemaForm();
  mainName = 'price';

  constructor(
    private priceHttp: PriceHttpService,
    private priceService: PriceService,
    private generalService: GeneralService<IPrice>,
    private generalHttp: GeneralHttpService<IPrice>
  ) { }

  ngOnInit() {
    this.getPrices();
  }

  getPrices(): any {
    if (this.generalService.data[this.mainName]) {
      this.prices = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (prices: IPrice[]) => this.prices = prices
      );
    }
    // if (this.priceService.prices) {
    //   return this.prices = this.priceService.prices;
    // }

    // this.priceHttp.getPrices().subscribe(
    //   (prices: PriceSchema[]) => this.prices = prices
    // );
  }

}
