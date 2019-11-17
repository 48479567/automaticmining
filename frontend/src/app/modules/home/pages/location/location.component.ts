import { Component, OnInit } from '@angular/core';
import { LocationHttpService } from 'src/app/core/http/schema/location.http.service';
import { LocationService } from 'src/app/core/services/schema/location.service';
import { LocationSchema, LocationSchemaForm } from 'src/app/shared/models';
import { GeneralService } from 'src/app/core/services/schema/general.service';
import { GeneralHttpService } from 'src/app/core/http/schema/general.http.service';
import { ILocation } from 'selenium-webdriver';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: ILocation[] | LocationSchema[];
  locationCreate: LocationSchemaForm = new LocationSchemaForm();
  mainName = 'location';

  constructor(
    private locationHttp: LocationHttpService,
    private locationService: LocationService,
    private generalService: GeneralService<ILocation>,
    private generalHttp: GeneralHttpService<ILocation>
  ) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations(): any {
    if (this.generalService.data[this.mainName]) {
      this.locations = this.generalService.data[this.mainName];
    } else {
      this.generalHttp.getData(this.mainName).subscribe(
        (locations: ILocation[]) => this.locations = locations
      );
    }
    // if (this.locationService.locations) {
    //   return this.locations = this.locationService.locations;
    // }

    // this.locationHttp.getLocations().subscribe(
    //   (locations: LocationSchema[]) => this.locations = locations
    // );
  }

}
