export class Work {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class WorkCard extends Work {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}


export class WorkSchema extends WorkCard {
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


export class WorkSchemaForm {
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
