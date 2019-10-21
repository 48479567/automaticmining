import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header>
      <router-outlet></router-outlet>
    </app-header>
    <app-footer></app-footer>
  `
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
