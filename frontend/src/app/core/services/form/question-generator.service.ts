import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class QuestionGeneratorService {

  toFormGroup(fieldItemDisplayInForm: any) {
    const group: any = {};
    // tslint:disable-next-line: forin
    for (const key in fieldItemDisplayInForm) {
      group[key] = fieldItemDisplayInForm[key] ?
        new FormControl(fieldItemDisplayInForm[key], Validators.required) :
        new FormControl('');
    }
    return new FormGroup(group);
  }

  constructor(
  ) { }
}
