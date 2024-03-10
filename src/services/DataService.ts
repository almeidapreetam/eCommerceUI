import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductFilter } from 'src/models/ProductFilter';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private productFilter = new BehaviorSubject<ProductFilter>(new ProductFilter);
    private category = new BehaviorSubject<any>(null);
    private brand = new BehaviorSubject<any>(null);

    productFilter$ = this.productFilter.asObservable();
    category$ = this.category.asObservable();
    brand$ = this.brand.asObservable();
  
    setProductFilter(model: ProductFilter) {
      this.productFilter.next(model);
    }
    setCategory(model: any) {
      this.category.next(model);
    }
    setBrand(model: any) {
      this.brand.next(model);
    }
}
