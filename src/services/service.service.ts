import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/models/RegisterUser';
import { LoginUser } from 'src/models/LoginUser';
import { ProductFilter } from 'src/models/ProductFilter';
import { Product } from 'src/models/Product';
import { Cart } from 'src/models/Cart';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
    this.userid = this.getUserId()
   }
  apiUrl = 'https://localhost:44301/api/';
  userid: number | null = null;


  getUserFromCookies(): any {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'userData') {
            return JSON.parse(decodeURIComponent(value));
        }
    }
    return null; // Return null if userData cookie is not found
  }
   getUserId(): number | null {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'userData') { 
            try {
                const data = JSON.parse(decodeURIComponent(value));
                return data.userId; 
            } catch (error) {
                console.error('Error parsing userData cookie:', error);
                return null; 
            }
        }
    }
    return null; 
}


  checkIfUserloggedIn() : boolean {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'userData') {
            return true;
        }
    }
    return false; // Return null if userData cookie is not found
  }
  
   registerUser(registerUser : RegisterUser): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Login/Register', registerUser);
  }
  loginuser(loginuser : LoginUser): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Login/Login', loginuser);
  }
  getMenuBar(): Observable<any> {
    return this.http.get(this.apiUrl + 'Master/MenuBar/GetMenuBarData');
  }
  getImageSlider(): Observable<any> {
    return this.http.get(this.apiUrl + 'Master/ImageSlider/GetAll');
  }
  fetchHomeCategory():Observable<any> {
    return this.http.get(this.apiUrl+'Home/Category'); 
  }
  getLeftSidePanelData(): Observable<any> {
    return this.http.get(this.apiUrl + 'Home/LeftPanelData');
  }
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}Products?id=${id}`);
  }
  getTrendingItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}Home/TrendingItems`);
  }
  filterProducts(model : ProductFilter): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'Products', model);
  }
  addToCart(product: Product, quantity : number): Observable<any> {
    
    let cart: Cart = {
      ProductId: product.productId,   
      Quantity: quantity,
      Price: product.price,
      Discount: product.discount,
      Userid: this.userid == null ?  0 : this.userid
      };
    return this.http.post<any>(`${this.apiUrl}AddToCart/Add`, cart);
  }
  deleteFromCart(product: Product): Observable<any> {
    let cart: Cart = {
      ProductId: product.productId,  
      Userid: this.userid == null ?  0 : this.userid
      };
    return this.http.post<any>(`${this.apiUrl}AddToCart/Delete`, cart);
  }
}
