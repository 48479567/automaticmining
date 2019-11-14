import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-auth-question',
  templateUrl: './dynamic-form-auth.component.html'
})
export class DynamicFormAuthQuestionComponent {
  @Input() questions: [string, string][];
  form = this.fb.group({ });

  constructor(
    private fb: FormBuilder
  ) { }

}

