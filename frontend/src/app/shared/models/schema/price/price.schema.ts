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


export class PriceSchema extends PriceCard {
  constructor(
    public name: string,
    public quantity: number,
    public investment: number,
    public gain: number,
    public image: string,
    public description?: string,
    public createdat?: number | string,
    public updatedat?: number | string,
    public id?: string,
  ) {
    super(name, quantity, image);
   }
}


export class PriceSchemaForm {
  constructor(
    public name?: string,
    public quantity?: number,
    public investment?: number,
    public gain?: number,
    public image?: string,
    public description?: string,
    public createdat?: number | string,
    public updatedat?: number | string,
    public id?: string,
  ) {
  }
}
