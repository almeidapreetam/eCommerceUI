import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/services/service.service';
import { DataService } from 'src/services/dataService';
import { ProductFilter } from 'src/models/ProductFilter';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css'],
  
})
export class HomeCategoryComponent implements OnInit {
  homeCategory : any[] = [];
  productFilter = new ProductFilter(); 
  constructor(private service: ServiceService,private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.fetchHomeCategory();
  }

   async fetchHomeCategory(){
    this.homeCategory = await  this.service.fetchHomeCategory().toPromise();
    
  }
  goToCategory(categoryId: number) {
    this.productFilter.CategoryId = [categoryId];
    this.dataService.setProductFilter(this.productFilter);
    this.router.navigate(['/categoryProduct']);
  }
}