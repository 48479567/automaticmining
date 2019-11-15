import { SelectOption } from '../../form/question-base';

export class Price {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class PriceCard extends Price {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}

export interface IPrice {
  _id?: string;
  materialid: string;
  local: boolean;
  value: number;
  carrier: string;
  image: string;
  createdad?: string;
  updatedad?: string;

}


export class PriceSchema {
  constructor(
    public materialid: string,
    public local: boolean,
    public value: number,
    public carrier: string,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}


export class PriceSchemaForm {
  constructor(
    public materialid: SelectOption[],
    public local: boolean,
    public value: number,
    public carrier: SelectOption[],
    public image: string,
  ) {
    this.materialid = materialid ? materialid : [];
    this.local = local ? local : false;
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}
