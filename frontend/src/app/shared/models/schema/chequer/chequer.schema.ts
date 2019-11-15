export class Chequer {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class ChequerCard extends Chequer {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}


export interface IChequer {
  _id?: string;
  username: string;
  password: string;
  fullname: string;
  status: boolean;
  image: string;
  createdad?: string;
  updatedad?: string;

}


export class ChequerSchema {
  constructor(
    public username: string,
    public password: string,
    public fullname: string,
    public status: boolean,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}


export class ChequerSchemaForm {
  constructor(
    public username: string,
    public password: string,
    public fullname: string,
    public status: boolean,
    public image: string,

  ) {
    this.username = username ? username : '';
    this.password = password ? password : '';
    this.fullname = fullname ? fullname : '';
    this.status = status ? status : false;
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}
