import { Component, OnInit } from '@angular/core';
import { Page } from '../../../../shared/models';
import { pagesIcon } from '../../../../../assets/data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  pagesIcon: Page[] = pagesIcon;
  constructor() { }

  ngOnInit() { }
}
