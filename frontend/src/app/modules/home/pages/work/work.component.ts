import { Component, OnInit } from '@angular/core';

import { WorkHttpService } from 'src/app/core/http/schema/work.http.service';
import { WorkService } from 'src/app/core/services/schema/work.service';
import { WorkSchema, WorkSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  works: WorkSchema[];
  workCreate: WorkSchemaForm = new WorkSchemaForm();

  constructor(
    private workHttp: WorkHttpService,
    private workService: WorkService
  ) { }

  ngOnInit() {
    this.getWorks();
  }

  getWorks(): any {
    if (this.workService.works) {
      return this.works = this.workService.works;
    }

    this.workHttp.getWorks().subscribe(
      (works: WorkSchema[]) => this.works = works
    );
  }

}
