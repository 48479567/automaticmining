import { Component, OnInit } from '@angular/core';

import { UserHttpService } from 'src/app/core/http/schema/user/user.http.service';
import { UserService } from 'src/app/core/services/schema/user.service';
import { UserSchema, UserSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: UserSchema[];
  userCreate: UserSchemaForm = new UserSchemaForm();

  constructor(
    private userHttp: UserHttpService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): any {
    if (this.userService.users) {
      return this.users = this.userService.users;
    }

    this.userHttp.getUsers().subscribe(
      (users: UserSchema[]) => this.users = users
    );
  }

}
