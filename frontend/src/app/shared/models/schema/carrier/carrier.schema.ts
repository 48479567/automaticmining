export class Carrier {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class CarrierCard extends Carrier {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}


export class CarrierSchema extends CarrierCard {
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


export class CarrierSchemaForm {
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
    // this.name = name ? name : '';
    // this.quantity = quantity ? quantity : 0;
    // this.investment = investment ? investment : 0;
    // this.sale = sale ? sale : 0;
    // this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
    // this.description = description ? description : '';

  }
}
