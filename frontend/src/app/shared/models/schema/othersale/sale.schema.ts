export class SaleProducts {
  productid: string;
  quantity: number;
  saleprice: number;
  productname?: string;
  productindex?: number;
}

export class SaleSchemaForm {
  constructor(
    public userid?: string,
    public products?: SaleProducts[],
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
    this.userid = userid ? userid : '';
    this.products = products ? products : [];
    this.createdat = createdat ? createdat : '';
    this.updatedat = updatedat ? updatedat : '';
  }
}

