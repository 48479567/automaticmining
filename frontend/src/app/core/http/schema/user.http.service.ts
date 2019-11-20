import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserSchema } from '../../../shared/models';
import { URL } from '../data.http';
import { UserService } from '../../services/schema/user.service';
import { LoggerService } from '../../logger.service';

@Injectable({providedIn: 'root'})
export class UserHttpService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private logger: LoggerService,
  ) { }


  getUsers(): Observable<Array<UserSchema>> {
    return this.http.get<Array<UserSchema>>(`${URL}/user`)
      .pipe(
        tap((users: UserSchema[]) => {
          this.logger.log(`Insert ${users.length} users.`);
          this.userService.users = users;
        }),
      );
  }
}
