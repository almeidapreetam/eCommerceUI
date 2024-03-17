import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/models/Product';
import { ProductFilter } from 'src/models/ProductFilter';
import { TempCart } from 'src/models/TempCart';
import { ServiceService } from './service.service';
import { ObjectService } from './ObjectService';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private service: ServiceService, private objectService: ObjectService) {}

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
    setTempCartSession(model: TempCart) {
      const currentCartValue = this.tempCart.getValue();
      const mod = { key: 'value' };
      const updatedCartValue = [...currentCartValue, model];
      
      this.objectService.setObject(updatedCartValue);
    }
    getTempCartSession() {
      const storedObject = this.objectService.getObject();
    }
    setCart(model: any) {
      this.Cart.next(model);
    }
    async addToCart(product : Product, quantity : number) 
        {
          if (this.service.checkIfUserloggedIn())
          {
            var data  = await this.service.addToCart( product , quantity).toPromise();
            this.setCart(data);
          }
          this.setTempCartSession({product ,quantity: quantity})    
            const cookies = document.cookie.split(';').map(cookie => cookie.trim());
            for (const cookie of cookies) {
                const [name, value] = cookie.split('=');
                if (name === 'userData') {
                    return JSON.parse(decodeURIComponent(value));
                }
            }
            const storedObject = this.objectService.getObject();
            return null; // Return null if userData cookie is not found
        }
}
