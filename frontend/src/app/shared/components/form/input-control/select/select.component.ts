import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  @Input() errorMessage = '';
  @Input() dataOptions: any[];
  @Input() selectValueAnchor = '';
  @Input() value = '';
  @Input() matIconPrefix = '';
  @Input() className = '';


  constructor() { }

  ngOnInit() {
    console.log(this.dataOptions);
  }
}
