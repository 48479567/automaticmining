export class PurchaseProducts {
  productid: string;
  quantity: number;
  investmentprice: number;
  productname?: string;
  productindex?: number;
}

export class PurchaseSchemaForm {
  constructor(
    public userid: string,
    public products: PurchaseProducts[],
    public createdat?: string | number,
    public updatedat?: string | number,
  ) {
    this.userid = userid ? userid : '';
    this.products = products ? products : [];
    this.createdat = createdat ? createdat : '';
    this.updatedat = updatedat ? updatedat : '';
  }
}
