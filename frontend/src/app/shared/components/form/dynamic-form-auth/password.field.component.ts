import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-password',
  template: `
  <mat-form-field>
    <input
      matInput
      [placeholder]="placeholder"
      [type]="hide? 'password' : 'text'" />
      <button mat-icon-button matSuffix
        (click)="hide = !hide"
        [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
        <mat-icon>{{ hide? 'visibility_off' : 'visibility' }}</mat-icon>
      </button>
  </mat-form-field>
  `
})
export class PasswordFieldComponent implements OnInit {
  @Input() placeholder = 'Enter your Password';
  hide = true;

  constructor() { }

  ngOnInit() { }
}
