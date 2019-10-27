import { Component, OnInit } from '@angular/core';

import { MaterialHttpService } from 'src/app/core/http/schema/material/material.http.service';
import { MaterialService } from 'src/app/core/services/schema/material.service';
import { MaterialSchema } from 'src/app/shared/models';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  materials: MaterialSchema[];

  constructor(
    private materialHttp: MaterialHttpService,
    private materialService: MaterialService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): any {
    if (this.materialService.materials) {
      return this.materials = this.materialService.materials;
    }

    this.materialHttp.getCategories().subscribe(
      (materials: MaterialSchema[]) => this.materials = materials
    );
  }

}
