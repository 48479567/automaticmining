import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/shared/models';
import { pagesIcon } from 'src/assets/data';

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
