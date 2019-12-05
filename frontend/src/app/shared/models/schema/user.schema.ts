export class User {
  constructor(
    public name: string,
    public quantity: number
  ) { }
}

export class UserCard extends User {
  constructor(
    public name: string,
    public quantity: number,
    public image: string
  ) {
    super(name, quantity);
   }
}

export interface IUser {
  _id?: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  status: boolean;
  image: string;
  createdat?: string;
  updatedat?: string;
}

export class UserSchema {
  constructor(
    public fistname: string,
    public lastname: string,
    public username: string,
    public password: string,
    public status: boolean,
    public image: string,
    public createdat?: number | string,
    public updatedat?: number | string,
  ) {
   }
}


export class UserSchemaForm {
  constructor(
    public firstname?: string,
    public lastname?: string,
    public username?: string,
    public password?: string,
    public status?: boolean,
    public image?: string,
  ) {
    this.firstname = firstname ? firstname : '';
    this.lastname = lastname ? lastname : '';
    this.username = username ? username : '';
    this.password = password ? password : '';
    this.status = status ? status : false;
    this.image = image ? image : 'https://awodev.com/images/default-forum-user.png';
  }
}
