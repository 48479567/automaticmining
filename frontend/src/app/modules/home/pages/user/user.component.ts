import { Component, OnInit } from '@angular/core';

import { UserHttpService } from 'src/app/core/http/schema/user.http.service';
import { UserService } from 'src/app/core/services/schema/user.service';
import { UserSchema, UserSchemaForm, IUser } from 'src/app/shared/models';
import { GeneralService } from 'src/app/core/services/schema/general.service';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: UserSchema[];
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
