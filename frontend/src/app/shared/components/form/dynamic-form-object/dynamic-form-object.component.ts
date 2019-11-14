import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-object',
  templateUrl: './dynamic-form-object.component.html'
})
export class DynamicFormObjectComponent implements OnInit {
  @Input() resource: any = {};
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
    // this.form = (this.resource, null);
  }

  isTypeOfObject(value: any): boolean {
    return typeof value === 'object';
  }

}
