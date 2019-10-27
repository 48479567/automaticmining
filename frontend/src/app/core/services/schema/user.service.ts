import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserSchema[];

  getCategories(): Observable<Array<UserSchema>> {
    return of(this.users);
  }

  constructor(

  ) {
  }
}
