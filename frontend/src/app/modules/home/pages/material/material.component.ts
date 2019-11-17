import { Component, OnInit } from '@angular/core';

import { MaterialHttpService } from 'src/app/core/http/schema/material.http.service';
import { MaterialService } from 'src/app/core/services/schema/material.service';
import { MaterialSchema, MaterialSchemaForm, IMaterial } from 'src/app/shared/models';
import { GeneralService } from 'src/app/core/services/schema/general.service';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  materials: MaterialSchema[];
  materialCreate: MaterialSchemaForm = new MaterialSchemaForm();
  mainName = 'material';

  constructor(
    private materialHttp: MaterialHttpService,
    private materialService: MaterialService,
    private generalService: GeneralService<IMaterial>,
    private generalHttp: GeneralHttpService<IMaterial>
  ) { }

  ngOnInit() {
    this.getMaterials();
  }

  getMaterials(): any {
    if (this.generalService.data[this.mainName]) {
      this.materials = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (materials: IMaterial[]) => this.materials = materials
      );
    }
    // if (this.materialService.materials) {
    //   return this.materials = this.materialService.materials;
    // }

    // this.materialHttp.getMaterials().subscribe(
    //   (materials: MaterialSchema[]) => this.materials = materials
    // );
  }

}
