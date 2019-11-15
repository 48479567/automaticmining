export class Location {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class LocationCard extends Location {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}


export interface ILocation {
  _id?: string;
  name: string;
  mine: boolean;
  length: number;
  status: boolean;
  image: string;
  createdad?: string;
  updatedad?: string;

}


export class LocationSchema {
  constructor(
    public name: string,
    public mine: boolean,
    public length: number,
    public status: boolean,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}


export class LocationSchemaForm {
  constructor(
    public name: string,
    public mine: boolean,
    public length: number,
    public status: boolean,
    public email: string,
    public image: string,
  ) {
    this.name = name ? name : '';
    this.mine = mine ? mine : false;
    this.length = length ? length : 0;
    this.status = status ? status : false;
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}

