import { SelectOption } from '../../form/question-base';

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

export interface ITruck {
  _id?: string;
  carrierid: string;
  capacity: number;
  mark: string;
  plaque: string;
  extension: boolean;
  capacityextension: number;
  status: boolean;
  image: string;
  createdad?: string;
  updatedad?: string;

}

export class TruckSchema {
  constructor(
    public carrierid: string,
    public capacity: number,
    public mark: string,
    public plaque: string,
    public extension: boolean,
    public capacityextension: number,
    public status: boolean,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}

export class TruckSchemaForm {
  constructor(
    public carrierid?: SelectOption[],
    public capacity?: number,
    public mark?: string,
    public plaque?: string,
    public extension?: boolean,
    public capacityextension?: number,
    public status?: boolean,
    public image?: string
  ) {
    this.carrierid = carrierid ? carrierid : [];
    this.capacity = capacity ? capacity : 0;
    this.mark = mark ? mark : '';
    this.plaque = plaque ? plaque : '';
    this.extension = extension ? extension : false;
    this.capacityextension = capacityextension ? capacityextension : this.capacity;
    this.status = status ? status : false;
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}
