import { Component, OnInit, Inject } from '@angular/core';
import { Validators as v, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogData } from 'src/app/shared/models';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-chequer-form',
  templateUrl: './chequer-form.component.html',
  styleUrls: ['./chequer-form.component.scss']
})

export class ChequerFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: this.fb.control(this.data.content.username,
      [v.required, v.minLength(8)]),
    password: this.fb.control(this.data.content.password,
      [v.required, v.minLength(8)]),
    confirm: this.fb.control(this.data.content.password,
      [v.required, v.minLength(8)]),
    fullname: this.fb.control(this.data.content.fullname,
      v.required),
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
    public dialogRef: MatDialogRef<ChequerFormComponent>,
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
