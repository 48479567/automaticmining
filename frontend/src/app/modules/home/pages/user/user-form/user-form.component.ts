import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { GeneralHttpService } from '../../../../../core/http/schema/general.http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from '../../../../../shared/models';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    firstname: this.fb.control(this.data.content.firstname,
      v.required),
    lastname: this.fb.control(this.data.content.lastname,
      v.required),
    username: this.fb.control(this.data.content.username,
      [v.required, v.minLength(8)]),
    password: this.fb.control(this.data.content.password,
      [v.required, v.minLength(8)]),
    confirm: this.fb.control(this.data.content.password,
      [v.required, v.minLength(8)]),
    status: this.fb.control(this.data.content.status,
      v.required),
    image: this.fb.control(this.data.content.image,
      v.required)
  });

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
  get confirm(): FormControl {
    return this.form.get('confirm') as FormControl;
  }

  passwordData = {
    icon: 'visibility_off',
    type: 'password',
    messageError: ''
  };
  changePasswordData(): void {
    this.passwordData.icon = this.passwordData.icon === 'visibility_off' ?
                             'visibility_off' : 'visibility';
    this.passwordData.type = this.passwordData.type === 'password' ?
                             'text' : 'password';
  }

  constructor(
    private fb: FormBuilder,
    private ghs: GeneralHttpService<any>,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) { }

  ngOnInit() {
    this.formOnChanges();
  }

  formOnChanges(): void {
    this.confirm.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged(),
    ).subscribe(
      (valConfirm: string) => {
        if (this.password.value !== valConfirm) {
          const confirmValue = 'confirm';
          this.passwordData.messageError = 'Passwords are not the same!!';
          this.form.controls[confirmValue].setErrors({ incorrect : true });
        }
      }
    );
  }


  save(): void {
    const { title, action, index } = this.data;
    const id = this.data.content._id ? `/${this.data.content._id}` : '';
    this.ghs.saveData(title, action, this.form.value, index, id).subscribe(
      () => this.dialogRef.close()
    );
  }
}
