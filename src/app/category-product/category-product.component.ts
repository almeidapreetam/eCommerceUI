import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/models/Product';
import { ProductFilter } from 'src/models/ProductFilter';
import { DataService } from 'src/services/dataService';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  productFilter : ProductFilter = new ProductFilter();
  product: Product[] = [];
  data: string = "";
  

  constructor(private service: ServiceService, private route: ActivatedRoute, private dataService: DataService) {}


  ngOnInit(): void {
    this.dataService.productFilter$.subscribe(data => {
      this.getProducts(data);
    });
  }


  getProducts(productFilter : ProductFilter ) {
    this.service.filterProducts(productFilter)
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
