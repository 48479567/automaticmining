export class Provider {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class ProviderCard extends Provider {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}

export interface IProvider {
  _id?: string;
  name: string;
  phonenumber: number;
  image: string;
  createdad?: string;
  updatedad?: string;

}


export class ProviderSchema {
  constructor(
    public name: string,
    public phonenumber: number,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}


export class ProviderSchemaForm {
  constructor(
    public name: string,
    public phonenumber: number,
    public image: string,
  ) {
    this.name = name ? name : '';
    this.phonenumber = phonenumber ? phonenumber : 0;
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}
