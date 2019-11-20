import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSchema } from '../../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserSchema[];

  getUsers(): Observable<Array<UserSchema>> {
    return of(this.users);
  }

  constructor(

  ) {
  }
}
