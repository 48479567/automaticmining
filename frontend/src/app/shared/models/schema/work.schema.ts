import { SelectOption } from '../form/question-base';

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

export interface IWork {
  _id?: string;
  customer: string;
  companyid: string;
  name: string;
  image: string;
  createdad?: string;
  updatedad?: string;

}

export class WorkSchema {
  constructor(
    public customer: string,
    public companyid: string,
    public name: string,
    public image: string,
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
   }
}

export class WorkSchemaForm {
  constructor(
    public customer?: string,
    public companyid?: SelectOption[],
    public name?: string,
    public image?: string,
  ) {
    this.customer = customer ? customer : '';
    this.companyid = companyid ? companyid : [];
    this.name = name ? name : '';
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
  }
}
