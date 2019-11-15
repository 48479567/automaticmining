import { SelectOption } from '../../form/question-base';

export class Travel {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class TravelCard extends Travel {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}

export interface ITravel {
  _id?: string;
  priceid: string;
  firstprice: number;
  aditionalprice: number;
  name: string;
  status: boolean;
  image: string;
  createdad?: string;
  updatedad?: string;

}


export class TravelSchema {
  constructor(
    public priceid: string,
    public firstprice: number,
    public aditionalprice: number,
    public name: string,
    public status: boolean,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}


export class TravelSchemaForm {
  constructor(
    public priceid: SelectOption[],
    public firstprice: number,
    public aditionalprice: number,
    public name: string,
    public status: boolean,
    public image: string,
  ) {
    this.priceid = priceid ? priceid : [];
    this.firstprice = firstprice ? firstprice : 0;
    this.aditionalprice = aditionalprice ? aditionalprice : 0;
    this.name = name ? name : '';
    this.status = status ? status : false;
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}
