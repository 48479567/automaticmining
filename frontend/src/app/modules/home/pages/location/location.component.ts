import { Component, OnInit } from '@angular/core';
import { LocationSchema, LocationSchemaForm } from '../../../../shared/models';
import { GeneralService } from '../../../../core/services/schema/general.service';
import { GeneralHttpService } from '../../../../core/http/schema/general.http.service';
import { ILocation } from 'selenium-webdriver';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { LocationFormComponent } from './location-form/location-form.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: ILocation[] | LocationSchema[];
  locationCreate: LocationSchemaForm = new LocationSchemaForm();
  displayedColumns = ['name', 'mine', 'latitude', 'longitude', 'status' ];
  mainName = 'location';

  constructor(
    private generalService: GeneralService<ILocation>,
    private generalHttp: GeneralHttpService<ILocation>,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getLocations();
    this.objectRef.currentComponentForm = LocationFormComponent;
    this.objectRef.mainName = this.mainName;
  }

  getLocations(): any {
    if (this.generalService.data[this.mainName].length) {
      this.locations = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (locations: ILocation[]) => {
          this.locations = locations;
          this.objectRef.lengthItemsSelected = locations.length;
        }
      );
    }
  }

}
