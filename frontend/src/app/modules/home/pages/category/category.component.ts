import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/core/services/schema/category.service';
import { CategorySchema } from 'src/app/shared/models/schema/category/category.schema';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: CategorySchema[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      (categories: CategorySchema[]) => this.categories = categories
    );
  }

  openFormDialog(): void {

  }

}
