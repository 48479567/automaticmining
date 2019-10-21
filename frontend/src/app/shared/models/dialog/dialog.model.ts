import { QuestionBase } from '../form/question-base';

export class DialogData {
  constructor(
    public title: any,
    public content: any,
    public actions: any
  ) {}
}

export class FormDialogData extends DialogData {
   constructor(
     public title: any,
     public content: any,
     public actions: any,
     public questions: QuestionBase<any>[]
   ) {
     super(title, content, actions);
   }
}
