import { Component, OnInit } from '@angular/core';
import { LocationHttpService } from 'src/app/core/http/schema/location/location.http.service';
import { LocationService } from 'src/app/core/services/schema/location.service';
import { LocationSchema, LocationSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locations: LocationSchema[];
  locationCreate: LocationSchemaForm = new LocationSchemaForm();

  constructor(
    private locationHttp: LocationHttpService,
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.getLocations();
  }

  getLocations(): any {
    if (this.locationService.locations) {
      return this.locations = this.locationService.locations;
    }

    this.locationHttp.getLocations().subscribe(
      (locations: LocationSchema[]) => this.locations = locations
    );
  }

}
