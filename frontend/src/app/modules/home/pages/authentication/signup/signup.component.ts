import { Component, OnInit } from '@angular/core';
import { QuestionBase, TextboxQuestion } from 'src/app/shared/models';

const questions: QuestionBase<any>[] = [
  new TextboxQuestion({
    key: 'firstname',
    label: 'First name',
    value: '',
    required: true,
    type: 'text'
  }),
  new TextboxQuestion({
    key: 'lastname',
    label: 'Last name',
    value: '',
    required: true,
    type: 'text'
  }),
  new TextboxQuestion({
    key: 'username',
    label: 'Username',
    value: '',
    required: true,
    type: 'text'
  }),
  new TextboxQuestion({
    key: 'password',
    label: 'Password',
    value: '',
    required: true,
    type: 'password'
  }),
  new TextboxQuestion({
    key: 'confirm',
    label: 'Confirm',
    value: '',
    required: true,
    type: 'password'
  }),
];

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  questions: any[];
  constructor() { }

  ngOnInit() {
    this.questions = questions;
  }
}
