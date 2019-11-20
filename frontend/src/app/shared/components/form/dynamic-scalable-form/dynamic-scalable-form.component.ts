import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { formatObjectQuestion } from '../../../../shared/models/schema/product/product.schema';

@Component({
  selector: 'app-form-scalable',
  templateUrl: './dynamic-scalable-form.component.html',
  styles: [`
    .group-field {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
      flex-direction: column;
    }
    button {
      display: inline-block;
    }
  `]
})

export class DynamicFormScalableComponent implements OnInit {
  @Input() object: any = { };
  @Input() nameObject = '';
  @Input() form: FormGroup;
  section: FormGroup;


  constructor() { }

  ngOnInit() {
    // this.section = formatObjectQuestion(this.object, null);
    this.form.addControl(this.nameObject, this.section);
  }

  errorInput(name: any): string[] {
    if (!name) {
      return;
    }
    return Object.keys(name);
  }

  addControl(controlName: string): void {
    if (!controlName.trim()) { return; }
    controlName = controlName.toLowerCase();
    this.section.addControl(controlName, new FormControl('', Validators.required));
  }

  removeControl(controlName: string): void {
    this.section.removeControl(controlName);
  }



}
