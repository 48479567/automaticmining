export class Category {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class CategoryCard extends Category {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}

export class CategorySchema extends CategoryCard {
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public sales: number,
    public image: string,
    public description?: string,
    public createdAt?: Date
  ) {
    super(name, quantity, image);
   }
}
