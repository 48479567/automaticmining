import { QuestionBase } from './question-base';

const typeString = 'type';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options[typeString] || '';
  }
}
