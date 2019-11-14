import { QuestionBase, OptionsQuestion } from './question-base';

const typeString = 'type';

export class TextAreaQuestion extends QuestionBase<string> {
  controlType = 'textarea';
  type: string;

  constructor(options: OptionsQuestion<string> = {}) {
    super(options);
    this.type = options[typeString] || '';
  }
}
