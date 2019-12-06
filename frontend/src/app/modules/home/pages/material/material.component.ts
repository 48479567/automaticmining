import { Component, OnInit } from '@angular/core';
import { MaterialSchema, MaterialSchemaForm, IMaterial } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ObjectRefService } from '../../../../core/services/schema/object-ref.service';
import { MaterialFormComponent } from './material-form/material-form.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  materials: MaterialSchema[];
  materialCreate: MaterialSchemaForm = new MaterialSchemaForm();
  displayedColumns = ['name', 'status'];
  mainName = 'material';

  constructor(
    private generalService: GeneralService<IMaterial>,
    private generalHttp: GeneralHttpService<IMaterial>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getMaterials();
    this.objectRef.currentComponentForm = MaterialFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getMaterials(): any {
    if (this.generalService.data[this.mainName].length) {
      this.materials = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (materials: IMaterial[]) => {
          this.materials = materials;
          this.objectRef.lengthItemsSelected = materials.length;
        }
      );
    }

  }

}
