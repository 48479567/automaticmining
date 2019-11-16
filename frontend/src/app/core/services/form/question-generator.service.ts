import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class QuestionGeneratorService {

  toFormGroup(fieldItemDisplayInForm: any) {
    const group: any = {};
    // tslint:disable-next-line: forin
    for (const key in fieldItemDisplayInForm) {
      if (key === '_id' || key === 'createdat' || key === 'updatedat' || key === '__v') {
        continue;
      }
      group[key] =  new FormControl(fieldItemDisplayInForm[key], Validators.required);
    }
    return new FormGroup(group);
  }

  constructor(
  ) { }
}
