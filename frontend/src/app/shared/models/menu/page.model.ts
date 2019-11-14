export class Page {
  constructor(
    public title: string,
    public path: string
  ) { }
}

export class PageIcon extends Page {
  constructor(
    public title: string,
    public path: string,
    public icon?: string
  ) {
    super(title, path);
    this.icon = icon ? icon : 'pages';
  }
}
