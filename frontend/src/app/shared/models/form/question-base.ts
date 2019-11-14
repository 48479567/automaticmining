export interface SelectOption {
  key: string;
  value: string;
}

export interface OptionsQuestion<T> {
  value?: any;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  type?: string;
  options?: { key: string, value: string }[];
}

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  type: string;
  options: SelectOption[] = [];

  constructor(options: OptionsQuestion<T> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
