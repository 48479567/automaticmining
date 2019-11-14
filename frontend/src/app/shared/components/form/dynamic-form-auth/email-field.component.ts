import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-field',
  template: `
  <mat-form-field>
    <input
      matInput
      [placeholder]="placeholder" />
    <span matSuffix>{{ suffix }}</span>
  </mat-form-field>
  `
})

export class EmailFieldComponent implements OnInit {
  @Input() placeholder = 'Email';
  @Input() suffix = '@gmail.com';

  constructor() { }

  ngOnInit() { }
}
