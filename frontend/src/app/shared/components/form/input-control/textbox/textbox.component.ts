import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textbox-control',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})

export class TextboxControlComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() form: FormGroup;
  @Input() controlName = '';
  @Input() required = false;
  @Input() errorMessage = '';
  @Input() matHintEnd = '';
  @Input() matHintStart = '';
  @Input() matIconPrefix = '';
  @Input() matPrefix = '';
  @Input() matSuffix = '';
  @Input() matIconSuffix = '';
  @Input() maxLength = Infinity;
  @Input() minLength = 0;
  @Input() max = Infinity;
  @Input() min = 0;
  @Input() type = 'text';

  constructor() { }

  ngOnInit() { }
}
