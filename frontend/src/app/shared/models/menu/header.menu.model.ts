export class MenuItem {
  constructor(
    public label: string,
  ) { }
}

export class HeaderMenuItem extends MenuItem {
  constructor(
    public label: string,
    public value?: string,
    public ariaLabel?: string,
    public iconLabel?: string

  ) {
    super(label);
   }
}

export class MenuItemLink extends MenuItem {
  constructor(
    public label: string,
    public link: string
  ) {
    super(label);
  }
}
