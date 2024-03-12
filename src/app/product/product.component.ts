import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/Product';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, public service : ServiceService) { }
  id: number | undefined;
  product :Product | undefined; 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    if(this.id) {
      this.getProduct(this.id);
    }  
  }

 async getProduct(id: number) {
  this.product = await this.service.getProduct(id).toPromise();
  console.log(this.product)
 }
}
