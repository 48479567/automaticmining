import { Component, OnInit, Input } from '@angular/core';
import { iconsObject } from '../../../models';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html'
})

export class ItemViewComponent implements OnInit {
  @Input() data: any;
  @Input() formValue: any;
  iconsObject = iconsObject;



  constructor() { }

  ngOnInit() { }

}
