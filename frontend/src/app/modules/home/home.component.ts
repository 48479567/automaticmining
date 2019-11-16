import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header>
      <router-outlet></router-outlet>
    </app-header>
  `
})

export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}

