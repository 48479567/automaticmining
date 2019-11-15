import { SelectOption } from '../../form/question-base';

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

export interface ICarrier {
  _id?: string;
  fullname: string;
  providerid: string;
  rfc: string;
  address: string;
  phonenumber: string;
  email: string;
  image: string;
  createdad?: string;
  updatedad?: string;

}


export class CarrierSchema {
  constructor(
    public fullname: string,
    public providerid: string,
    public rfc: string,
    public address: string,
    public phonenumber: string,
    public email: string,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}


export class CarrierSchemaForm {
  constructor(
    public fullname: string,
    public providerid: SelectOption[],
    public rfc: string,
    public address: string,
    public phonenumber: string,
    public email: string,
    public image: string,
  ) {
    this.fullname = fullname ? fullname : '';
    this.providerid = providerid ? providerid : [];
    this.rfc = rfc ? rfc : '';
    this.address = address ? address : '';
    this.phonenumber = phonenumber ? phonenumber : '';
    this.email = email ? email : '';
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}
