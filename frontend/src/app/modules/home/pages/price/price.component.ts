import { Component, OnInit } from '@angular/core';
import { PriceHttpService } from 'src/app/core/http/schema/price.http.service';
import { PriceService } from 'src/app/core/services/schema/price.service';
import { PriceSchema, PriceSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  prices: PriceSchema[];
  priceCreate: PriceSchemaForm = new PriceSchemaForm();

  constructor(
    private priceHttp: PriceHttpService,
    private priceService: PriceService
  ) { }

  ngOnInit() {
    this.getPrices();
  }

  getPrices(): any {
    if (this.priceService.prices) {
      return this.prices = this.priceService.prices;
    }

    this.priceHttp.getPrices().subscribe(
      (prices: PriceSchema[]) => this.prices = prices
    );
  }

}
