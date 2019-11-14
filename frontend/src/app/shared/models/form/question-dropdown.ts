import { QuestionBase, OptionsQuestion } from './question-base';

const optionsString = 'options';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: { key: string, value: string }[] = [];

  constructor(options: OptionsQuestion<string> = {}) {
    super(options);
    this.options = options[optionsString] || [];
  }
}

export class DropdownFormat {
  constructor(
    public key: string,
    public value: string
  ) { }
}
