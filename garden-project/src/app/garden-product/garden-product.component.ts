import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../sample-products';
import { Product } from '../product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-garden-product',
  templateUrl: './garden-product.component.html',
  styleUrls: ['./garden-product.component.css']
})
export class GardenProductComponent implements OnInit {
product = PRODUCT;
selectedProduct: Product;
serviceRef : ProductService;

  constructor() { }

  ngOnInit() {

  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
