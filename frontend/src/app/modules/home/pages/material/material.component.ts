import { Component, OnInit } from '@angular/core';

import { MaterialHttpService } from 'src/app/core/http/schema/material/material.http.service';
import { MaterialService } from 'src/app/core/services/schema/material.service';
import { MaterialSchema, MaterialSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  materials: MaterialSchema[];
  materialCreate: MaterialSchemaForm = new MaterialSchemaForm();

  constructor(
    private materialHttp: MaterialHttpService,
    private materialService: MaterialService
  ) { }

  ngOnInit() {
    this.getMaterials();
  }

  getMaterials(): any {
    if (this.materialService.materials) {
      return this.materials = this.materialService.materials;
    }

    this.materialHttp.getMaterials().subscribe(
      (materials: MaterialSchema[]) => this.materials = materials
    );
  }

}
