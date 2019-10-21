import { Component, OnInit, Input } from '@angular/core';
import { FilterToggleIcon } from '../../models';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filtersSources: FilterToggleIcon[] = [];
  value: string;

  ngOnInit() {

  }

  log(value: string) {
    this.value = value;
  }

}

