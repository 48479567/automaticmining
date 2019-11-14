import { DropdownQuestion } from '../../form/question-dropdown';
import { QuestionBase } from '../../form/question-base';
import { TextboxQuestion } from '../../form/question-textbox';
import { ObjectRef } from '../objectref/objectref.schema';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

export class ProductSchema extends ProductCard {
  constructor(
    public name: string,
    public quantity: number,
    public investment: number,
    public price: number,
    public sale: number,
    public mark: string,
    public image: string,
    public categoryid: string,
    public features: { },
    public createdat: number | string,
    public updatedat?: number | string,
    public id?: string,
  ) {
    super(name, quantity, image);
   }
}

export class ProductSchemaForm {
  constructor(
    public name?: string,
    public quantity?: number,
    public investment?: number,
    public price?: number,
    public sale?: number,
    public mark?: string,
    public image?: string,
    public categoryid?: string,
    public features?: any,
    public createdat?: string | number,
    public updatedat?: string | number,
    public id?: string,
  ) {
    this.name = name ? name : '';
    this.quantity = quantity ? quantity : 0;
    this.investment = investment ? investment : 0;
    this.price = price ? price : 0;
    this.sale = sale ? sale : 0;
    this.mark = mark ? mark : '';
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
    this.categoryid = categoryid ? categoryid : '';
    this.features = features ? features : {};

  }

}

export const formatObjectQuestion = (item: any, objectRef: ObjectRef): FormGroup => {
  const objectQuestion: FormGroup = new FormGroup({});
  // tslint:disable-next-line: forin
  for (const oq in item) {
    if (oq === '__v') { continue; }

    objectQuestion.addControl(oq, new FormControl(item[oq], Validators.required));
  }
  return objectQuestion;
};

export const formatQuestionProduct = (item: any, objectRef: ObjectRef): QuestionBase<any>[] => {
  return [
    new TextboxQuestion({
      type: 'string',
      label: 'Product Name',
      value: item.name,
      required: true,
      key: 'name'
    }),
    new TextboxQuestion({
      type: 'number',
      label: 'Quantity',
      value: item.quantity,
      required: true,
      key: 'quantity'
    }),
    new TextboxQuestion({
      type: 'number',
      label: 'Investment',
      value: item.investment,
      required: true,
      key: 'investment'
    }),
    new TextboxQuestion({
      type: 'number',
      label: 'Price',
      value: item.price,
      required: true,
      key: 'price'
    }),
    new TextboxQuestion({
      type: 'number',
      label: 'Sale',
      value: item.sale,
      required: true,
      key: 'sale'
    }),
    new TextboxQuestion({
      type: 'string',
      label: 'Mark',
      value: item.mark,
      required: true,
      key: 'mark'
    }),
    new TextboxQuestion({
      type: 'string',
      label: 'Image',
      value: item.image,
      required: true,
      key: 'image'
    }),
    new DropdownQuestion({
      type: 'string',
      label: 'Category',
      value: item.categoryid,
      required: true,
      key: 'categoryid',
      options: objectRef.categoryid
    }),
  ];
};




