import { QuestionBase, OptionsQuestion } from './question-base';

const typeString = 'type';

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: OptionsQuestion<string> = {}) {
    super(options);
    this.type = options[typeString] || '';
  }
}
