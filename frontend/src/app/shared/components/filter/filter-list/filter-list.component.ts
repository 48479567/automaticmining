import { Component, OnInit, Input } from '@angular/core';
import { SelectOption } from '../../../../shared/models';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  @Input() filterSourcesList: SelectOption[] = [];
  @Input() filterLabel = '';
  selectValue = {
    data: [],
    backgroundColor: [],
    labels: [],
    items: []
  };

  constructor() { }

  ngOnInit() {
    console.log(this.filterSourcesList);
  }

}

