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


export class TravelSchema extends TravelCard {
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


export class TravelSchemaForm {
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
