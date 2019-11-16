export class Distance {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class DistanceCard extends Distance {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}


export interface IDistance {
  _id?: string;
  origin: string;
  destiny: string;
  value: number;
  image: string;
  createdad?: string;
  updatedad?: string;

}

export class DistanceSchema {
  constructor(
    public origin: string,
    public destiny: string,
    public value: number,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}

export class DistanceSchemaForm {
  constructor(
    public origin?: string,
    public destiny?: string,
    public value?: number,
    public image?: string,
  ) {
    this.origin = origin ? origin : '';
    this.destiny = destiny ? destiny : '';
    this.value = value ? value : 0;
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}

