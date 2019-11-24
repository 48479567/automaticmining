import { Component, OnInit } from '@angular/core';
import { UserSchemaForm, IUser } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { UserFormComponent } from './user-form/user-form.component';

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
    private generalService: GeneralService<IUser>,
    private generalHttp: GeneralHttpService<IUser>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getUsers();
    this.objectRef.currentComponentForm = UserFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getUsers(): any {
    if (this.generalService.data[this.mainName].length) {
      this.users = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (users: IUser[]) => {
          this.users = users;
          this.objectRef.lengthItemsSelected = users.length;
        }
      );
    }
  }

}
