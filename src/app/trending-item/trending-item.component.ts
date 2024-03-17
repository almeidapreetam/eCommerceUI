import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/Product';
import { DataService } from 'src/services/dataService';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-trending-item',
  templateUrl: './trending-item.component.html',
  styleUrls: ['./trending-item.component.css']
})
export class TrendingItemComponent implements OnInit {

  trendingProducts : Product[] |undefined;
  constructor(private service: ServiceService,private router: Router, private dataService : DataService) {}
  ngOnInit(): void {
   this.getTrendingItems(); 
  }


  async getTrendingItems()
  {
    this.trendingProducts = await this.service.getTrendingItems().toPromise()
    
  }

  gotoProduct(id? : number) {
    if(id){
      this.router.navigate(['/product', id]);
    }  
  }

}
