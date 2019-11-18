import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectOption } from 'src/app/shared/models';

@Component({
  selector: 'app-select-control',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectControlComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() form: FormGroup;
  @Input() controlName = '';
  @Input() options: SelectOption[] = [];
  @Input() errorMessage = '';


  constructor() { }

  ngOnInit() { }
}
