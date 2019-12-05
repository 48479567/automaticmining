import { Component, OnInit } from '@angular/core';
import { PageIcon } from '../../../../shared/models';
import { pagesIcon } from '../../../../../assets/data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  pagesIcon: PageIcon[] = pagesIcon;
  constructor() { }

  ngOnInit() { }
}
