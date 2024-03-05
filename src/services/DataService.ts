import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductFilter } from 'src/models/ProductFilter';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private productFilter = new BehaviorSubject<ProductFilter>(new ProductFilter);
    productFilter$ = this.productFilter.asObservable();
  
    setProductFilter(model: ProductFilter) {
      this.productFilter.next(model);
    }
}
