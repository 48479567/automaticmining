export class Material {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class MaterialCard extends Material {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}


export interface IMaterial {
  _id?: string;
  name: string;
  status: boolean;
  image: string;
  createdad?: string;
  updatedad?: string;

}


export class MaterialSchema {
  constructor(
    public name: string,
    public status: boolean,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}


export class MaterialSchemaForm {
  constructor(
    public name?: string,
    public status?: boolean,
    public image?: string,
  ) {
    this.name = name ? name : '';
    this.status = status ? status : false;
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}

