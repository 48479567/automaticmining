import { Component, OnInit, Input } from '@angular/core';
import { SelectOption } from '../../../../shared/models';

@Component({
  selector: 'app-select',
  template: `
    <mat-form-field appearance="outline" [hideRequiredMarker]="required">
      <mat-label>{{ label | titlecase }}</mat-label>
      <mat-select
        [value]="value"
        [placeholder]="placeholder"
        [id]="label"
        [required]="required">
        <mat-option *ngFor="let opt of options"
        [value]="opt.value">
          {{ opt.key }}
        </mat-option>
      </mat-select>
      <mat-error *ngIf="required">{{ label }} is required!!</mat-error>
    </mat-form-field>
  `
})

export class SelectComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() required = true;
  @Input() options: SelectOption[] = [];


  constructor() { }

  ngOnInit() { }
}
