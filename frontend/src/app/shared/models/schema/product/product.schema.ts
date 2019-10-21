export class Product {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class ProductCard extends Product {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}

export class ProductSchema extends Product {
  constructor(
    public id: number,
    public name: string,
    public set: string,
    public mark: string,
    public quantity: number,
  ) {
    super(name, quantity);
   }
}
