import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductFilter } from 'src/models/ProductFilter';
import { TempCart } from 'src/models/TempCart';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private productFilter = new BehaviorSubject<ProductFilter>(new ProductFilter);
    private category = new BehaviorSubject<any>(null);
    private brand = new BehaviorSubject<any>(null);
    private tempCart = new BehaviorSubject<TempCart[]>([]);
    private Cart = new BehaviorSubject<any>(null);

    productFilter$ = this.productFilter.asObservable();
    category$ = this.category.asObservable();
    brand$ = this.brand.asObservable();
    tempCart$ = this.tempCart.asObservable();
    Cart$ = this.Cart.asObservable();
  
    setProductFilter(model: ProductFilter) {
      this.productFilter.next(model);
    }
    setCategory(model: any) {
      this.category.next(model);
    }
    setBrand(model: any) {
      this.brand.next(model);
    }
    setTempCart(model: TempCart) {
      const currentCartValue = this.tempCart.getValue();
      const updatedCartValue = [...currentCartValue, model];
      this.tempCart.next(updatedCartValue);
    }
    setCart(model: any) {
      this.Cart.next(model);
    }
}
