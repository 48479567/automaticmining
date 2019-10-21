export class FilterToggle {

  constructor(
    public label: string,
    public value: string
  ) { }
}

export class FilterToggleIcon extends FilterToggle {
  constructor(
    public label: string,
    public value: string,
    public icon: string
  ) {
    super(label, value);

  }
}
