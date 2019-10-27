import { Component, OnInit } from '@angular/core';

import { WorkHttpService } from 'src/app/core/http/schema/work/work.http.service';
import { WorkService } from 'src/app/core/services/schema/work.service';
import { WorkSchema } from 'src/app/shared/models';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works: WorkSchema[];

  constructor(
    private workHttp: WorkHttpService,
    private workService: WorkService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): any {
    if (this.workService.works) {
      return this.works = this.workService.works;
    }

    this.workHttp.getCategories().subscribe(
      (works: WorkSchema[]) => this.works = works
    );
  }

}
