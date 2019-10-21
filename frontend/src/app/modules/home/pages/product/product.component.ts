import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/shared/models/schema/product/product.schema';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from 'src/app/shared/components';
import { FormDialogData } from 'src/app/shared/models/dialog/dialog.model';
import { TextboxQuestion, DropdownQuestion, FilterToggleIcon } from 'src/app/shared/models';
import { FilterService } from 'src/app/core/services/filter/filter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  filtersIcon: FilterToggleIcon[];

  products: ProductCard[] = [
    new ProductCard('Product 1', 2, 'https://i.imgur.com/boLV7nu.png'),
    new ProductCard('Product 2', 2, 'https://i.imgur.com/rUZlSSz.png'),
    new ProductCard('Product 3', 2, 'https://i.imgur.com/WD6e2Hl.jpg'),
    new ProductCard('Product 4', 2, 'https://i.imgur.com/yEKB3RH.png'),
    new ProductCard('Product 5', 2, 'https://i.imgur.com/GizQkzs.png'),
    new ProductCard('Product 6', 2, 'https://i.imgur.com/rrPjzC8.jpg'),
    new ProductCard('Product 7', 2, 'https://i.imgur.com/yCkxBe3.png'),
    new ProductCard('Product 8', 2, 'https://i.imgur.com/H3aHmxG.png'),
    new ProductCard('Product 9', 2, 'https://i.imgur.com/FIEVfid.png'),
    new ProductCard('Product 10', 2, 'https://i.imgur.com/ZiPHBUe.png'),

  ];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private filterService: FilterService
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

  openFormDialog(selectedProduct: ProductCard): void {
    const formDialogRef = this.dialog.open(FormDialogComponent, {
      data: { title: 'Product Dialog', questions: [
        new TextboxQuestion({
          key: 'productname',
          label: 'Product Name',
          value: selectedProduct.name,
          required: true,
          type: 'text',
        }),
        new TextboxQuestion({
          key: 'idproduct',
          label: 'ID Product',
          value: '',
          required: true,
          type: 'text'
        }),
        new TextboxQuestion({
          key: 'quantity',
          label: 'Quantity',
          value: selectedProduct.quantity,
          required: true,
          type: 'number'
        }),
        new TextboxQuestion({
          key: 'customer',
          label: 'Customer',
          value: '',
          required: true,
          type: 'text'
        }),
        new DropdownQuestion({
          key: 'type',
          label: 'Types',
          options: [
            { key: 'Value 1', value: 'value1' },
            { key: 'Value 2', value: 'value2' },
            { key: 'Value 3', value: 'value3' },
          ]
        }),
        new TextboxQuestion({
          key: 'idphonecustomer',
          label: 'ID / Phone Number Customer',
          value: '',
          required: true,
          type: 'text'
        }),
      ], content: selectedProduct } as FormDialogData
    } );
  }
}
