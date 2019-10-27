import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import { FilterToggleIcon } from '../../models';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() sources: any[];
  filtersIcon: FilterToggleIcon[];

  constructor(
    public dialog: MatDialog,
    private filterService: FilterService,
  ) { }

  ngOnInit() {
    this.getFiltersIcon();
  }

  getFiltersIcon(): void {
    this.filterService.getFiltersIcon().subscribe(
      (filtersIcon: FilterToggleIcon[]) => this.filtersIcon = filtersIcon,
      (error) => console.error(error)
    );
  }

}

