import { QuestionBase } from '../../form/question-base';
import { TextboxQuestion } from '../../form/question-textbox';
import { TextAreaQuestion } from '../../form/question-textarea';
import { ObjectRef } from '../objectref/objectref.schema';

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
    public name: string,
    public quantity: number,
    public investment: number,
    public sale: number,
    public image: string,
    public description?: string,
    public createdat?: string | number,
    public updatedat?: string | number,
    public id?: string,
  ) {
    super(name, quantity, image);
   }
}


export class CategorySchemaForm {
  constructor(
    public name?: string,
    public quantity?: number,
    public investment?: number,
    public sale?: number,
    public image?: string,
    public description?: string,
    public createdat?: number | string,
    public updatedat?: number | string,
    public id?: string,
  ) {
    this.name = name ? name : '';
    this.quantity = quantity ? quantity : 0;
    this.investment = investment ? investment : 0;
    this.sale = sale ? sale : 0;
    this.image = image ? image : 'https://i.imgur.com/dFT6YIC.png?2';
    this.description = description ? description : '';
  }

}


export const formatQuestionCategory = (item: any, objectRef: ObjectRef): QuestionBase<any>[] => {
  return [
    new TextboxQuestion({
      type: 'string',
      label: 'Category Name',
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
      label: 'Sale',
      value: item.sale,
      required: true,
      key: 'sale'
    }),
    new TextboxQuestion({
      type: 'string',
      label: 'Image',
      value: item.image,
      required: true,
      key: 'image'
    }),
    new TextAreaQuestion({
      type: 'string',
      label: 'Description',
      value: item.description,
      required: true,
      key: 'description'
    })
  ];
};

