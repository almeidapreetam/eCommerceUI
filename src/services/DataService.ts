import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable ,Subject,of } from 'rxjs';
import { Product } from 'src/models/Product';
import { ProductFilter } from 'src/models/ProductFilter';
import { TempCart } from 'src/models/TempCart';
import { ServiceService } from './service.service';
import { Cart } from 'src/models/Cart';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private service: ServiceService) {}

    private productFilter = new BehaviorSubject<ProductFilter>(new ProductFilter);
    private category = new BehaviorSubject<any>(null);
    private brand = new BehaviorSubject<any>(null);
    

    carts: Cart[] = [];

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
    saveUserSession(model: string): void {
      sessionStorage.setItem('useraccess', model);
    }
    getUserSession(): any {
      var userdata =  sessionStorage.getItem('useraccess');
      return userdata ? JSON.parse(userdata) : null;
    }
    isUserLoggedIn(): boolean {
      var userdata =  this.getUserSession()
      return (userdata && userdata.userId) ? true : false
    }
   
    private removeFromSessionCart(product: Product, quantity: number = 0): void {
      let currentCart: Cart[] = JSON.parse(sessionStorage.getItem('mycart') || '[]');
      const existingCartItemIndex = currentCart.findIndex(item => item.ProductId === product.productId);
    
      if (existingCartItemIndex !== -1) {
        if (quantity > 0) {
          currentCart[existingCartItemIndex].Quantity -= quantity;
          if (currentCart[existingCartItemIndex].Quantity <= 0) {
            currentCart.splice(existingCartItemIndex, 1);
          }
        } else {
          currentCart.splice(existingCartItemIndex, 1);
        }
        sessionStorage.setItem('mycart', JSON.stringify(currentCart));
        if(this.isUserLoggedIn()) {
          this.service.addToCart(currentCart)
        }
      }
    }
    
    
    public async addToCart(product: Product, quantity: number = 1) {
      let currentCart: Cart[] = JSON.parse(sessionStorage.getItem('mycart') || '[]');
      const existingCartItemIndex = currentCart.findIndex(item => item.ProductId === product.productId);

      if (existingCartItemIndex !== -1) {
          currentCart[existingCartItemIndex].Quantity += quantity;
      } else {
        const cart: Cart = new Cart();
        cart.ProductId = product.productId;
        cart.Quantity = quantity;
        currentCart.push(cart);
      }
      sessionStorage.setItem('mycart', JSON.stringify(currentCart));
      
      if(this.isUserLoggedIn()) {
        await this.service.addToCart(currentCart).toPromise();
      }
    }  
}
