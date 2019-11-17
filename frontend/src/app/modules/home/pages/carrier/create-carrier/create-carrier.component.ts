import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-carrier',
  templateUrl: './create-carrier.component.html',
  styleUrls: ['./create-carrier.component.scss']
})
export class CreateCarrierComponent {
  form = this.fb.group({
    name: false
  });


  constructor(
    private fb: FormBuilder
  ) { }

  printConsole(formValue: object) {
    console.log(formValue);
  }

}
