import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductFilter } from 'src/models/ProductFilter';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  productFilter : ProductFilter = new ProductFilter();
  product: Product[] = [];

  constructor(private service: ServiceService) {}
  ngOnInit() {
    
    this.productFilter.ProductTypeId = 1;
    this.productFilter.SubProductTypeId = 1;
    this.getProducts();
  }

  getProducts() {
    this.service.filterProducts(this.productFilter)
    .subscribe(
      response => {
        this.product = response;
        console.log('pro',this.product)
      },
      error => {
        console.error('Error:', error);
      }
    );

  }
}
