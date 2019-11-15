export class Company {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class CompanyCard extends Company {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}



export interface ICompany {
  _id?: string;
  name: string;
  ruc: string;
  image: string;
  createdad?: string;
  updatedad?: string;

}


export class CompanySchema {
  constructor(
    public name: string,
    public ruc: string,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}


export class CompanySchemaForm {
  constructor(
    public name: string,
    public ruc: string,
    public image: string,
  ) {
    this.name = name ? name : '';
    this.ruc = ruc ? ruc : '';
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}

