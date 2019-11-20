import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { QuestionService } from 'src/app/core/services/form/question.service';
import { debounceTime, distinctUntilChanged, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  form: FormGroup = this.fb.group({
    firstname: this.fb.control('', [
      Validators.required]
    ),
    lastname: this.fb.control('', [
      Validators.required]
    ),
    username: this.fb.control('', [
      Validators.minLength(8),
      Validators.required]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirm: this.fb.control('', [
      Validators.required,
      Validators.minLength(8)
      ]),
  });

  passwordData = {
    icon: 'visibility_off',
    type: 'password',
    messageError: ''
  };

  constructor(
    private service: QuestionService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.formOnChanges();
  }

  changePasswordData() {
    this.passwordData.icon = this.passwordData.icon === 'visibility_off' ? 'visibility' : 'visibility_off';
    this.passwordData.type = this.passwordData.type === 'text' ? 'password' : 'text';
  }

  login() {
    console.log(this.form.value);
  }

  formOnChanges(): void {
    this.confirm.valueChanges.pipe(
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe(
      (valConfirm: string) => {
        const confirmValue = 'confirm';
        if (this.password.value !== valConfirm) {
          this.passwordData.messageError = 'Passwords are not the same!!';
          this.form.controls[confirmValue].setErrors({ incorrect : true });
        }
      }
    );
  }

  checkPasswords(confirm: FormControl) {
    const password = this.password.value;
    return password === confirm.value ? null : { notSame: true };
  }

  get confirm(): FormControl {
    return this.form.get('confirm') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }


}
