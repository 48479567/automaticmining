import { Component, OnInit } from '@angular/core';

import { UserHttpService } from '../../../../core/http/schema/user.http.service';
import { UserService } from '../../../../core/services/schema/user.service';
import { UserSchema, UserSchemaForm, IUser } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: IUser[];
  userCreate: UserSchemaForm = new UserSchemaForm();
  mainName = 'user';

  constructor(
    private userHttp: UserHttpService,
    private userService: UserService,
    private generalService: GeneralService<IUser>,
    private generalHttp: GeneralHttpService<IUser>
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): any {
    if (this.generalService.data[this.mainName]) {
      this.users = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (users: IUser[]) => this.users = users
      );
    }
    // if (this.userService.users) {
    //   return this.users = this.userService.users;
    // }

    // this.userHttp.getUsers().subscribe(
    //   (users: UserSchema[]) => this.users = users
    // );
  }

}
