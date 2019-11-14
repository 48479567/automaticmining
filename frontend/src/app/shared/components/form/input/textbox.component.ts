import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textbox',
  template: `
    <mat-form-field
      appearance="outline"
      [hideRequiredMarker]="required"
      [style.fontSize.px]="size">
      <mat-label>{{ label | titlecase }}</mat-label>
      <input
        matInput
        #inputText
        (input)="setValueInter(inputText.value)"
        [value]="value"
        [min]="min"
        [max]="max"
        [placeholder]="placeholder"
        aria-describedby="enter"
        autocomplete="off"
        [id]="label"
        [type]="type"
        [required]="required" />
      <mat-error *ngIf="required">{{ label }} is required!!</mat-error>
    </mat-form-field>
  `
})

export class TextboxComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value: any;
  @Input() min = -100000;
  @Input() max = 100000;
  @Input() type: string | number = '' || 0;
  @Input() required = true;
  @Input() size = 16;
  @Output() valueChange = new EventEmitter<any>();

  setValueInter(value: any): void {
    this.valueChange.emit(value);
  }


  constructor() { }

  ngOnInit() { }
}
