import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TempCart } from 'src/models/TempCart';
import { DataService } from 'src/services/dataService';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  tempCart : TempCart[] = [];
  cart:any = null;
  checkOutCart:any = null;
  isUserLoggedIn : boolean = false;
  constructor(private service: ServiceService,private router: Router, private dataService: DataService) {}

  ngOnInit():void {
    this.isUserLoggedIn = this.service.checkIfUserloggedIn();
    this.getCheckoutCart();
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    for (const cart of this.tempCart) {
        if (cart.product && cart.product.price && cart.quantity) {
            subtotal += cart.product.price * cart.quantity;
        }
    }
    return subtotal;
}
proceedCheckout() {
  if(this.service.checkIfUserloggedIn()) {
    this.router.navigateByUrl('/checkout');
  }else {
    this.router.navigateByUrl('/login');
  } 
}

async getCheckoutCart() {
  this.checkOutCart = await this.service.getCheckOutCart().toPromise();
  console.log("this.checkOutCart",this.checkOutCart)
}

}
