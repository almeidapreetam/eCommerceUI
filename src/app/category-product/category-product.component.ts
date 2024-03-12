import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  category: any;
  brand: any;
  product: Product[] = [];
  data: string = "";
  filterGroup : any;
  

  constructor(private service: ServiceService, private route: ActivatedRoute, private dataService: DataService, private router: Router) {}


  ngOnInit(): void {
    this.dataService.productFilter$.subscribe(data => {
      this.getProducts(data);
      this.filterGroup = data;
    });
    this.dataService.category$.subscribe(data => {
      this.category = data;
    });
    this.dataService.brand$.subscribe(data => {
      this.brand = data;
    });

    console.log("userer", this.service.getUserId())
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
  gotoProduct(id? : number) {
    if(id){
      this.router.navigate(['/product', id]);
    }  
  }
  removeCategoryFilter(id: number) {
    this.dataService.productFilter$.subscribe(data => {
      this.filterGroup = data;
    });
    this.productFilter.CategoryId = this.filterGroup.CategoryId

    if (this.productFilter && this.productFilter.CategoryId) {
      this.productFilter.CategoryId = [...this.productFilter.CategoryId.filter(s => s !== id)];
      this.dataService.setProductFilter(this.productFilter);
    } else {
      console.error("Category not initialized or is empty.");
    }
  }
  
  removeBrandFilter(id : number) 
  {
    this.dataService.productFilter$.subscribe(data => {
      this.filterGroup = data;
    });
    this.productFilter.Brand = this.filterGroup.Brand

    if (this.productFilter && this.productFilter.Brand) {
      this.productFilter.Brand = [...this.productFilter.Brand.filter(s => s !== id)];
      this.dataService.setProductFilter(this.productFilter);
    } else {
      console.error("Brand not initialized or is empty.");
    }
  }
   async addToCart(prod : Product) {
    if (this.service.checkIfUserloggedIn())
    {
      var data  = await this.service.addToCart( prod , 1).toPromise();
      this.dataService.setCart(data);
    }
    else {
      this.dataService.setTempCart({product: prod ,quantity: 1})    
    }
  }
}
