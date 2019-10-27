export class Truck {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class TruckCard extends Truck {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}


export class TruckSchema extends TruckCard {
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


export class TruckSchemaForm {
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
