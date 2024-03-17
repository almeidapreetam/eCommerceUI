import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/services/service.service';
import { MenuBar } from 'src/models/MenuBar'
import { DataService } from 'src/services/dataService';
import { ProductFilter } from 'src/models/ProductFilter';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{
  categoryId: number | undefined;
  constructor(private service: ServiceService,private router: Router, private dataService: DataService) {

  }
  productFilter = new ProductFilter(); 
  menubar : any
  txtSearch : string = '';
  cartCount : number = 0 ;
  isUserLogger : Boolean | undefined; 
  
  

  ngOnInit():void {
    this.getManuBarData();
    this.dataService.productFilter$.subscribe(data => {
      this.productFilter = data;
    });
  
  }
  async getManuBarData() {
    this.menubar = await this.service.getMenuBar().toPromise();
    
  }
  goToCategory(categoryId: number) {
    this.productFilter.CategoryId = [categoryId];
    this.dataService.setProductFilter(this.productFilter);
    this.router.navigate(['/categoryProduct']);
  }
  searchClick(searchTerm: string) {
    this.productFilter.SearchText = searchTerm;
    this.dataService.setProductFilter(this.productFilter);
    this.router.navigate(['/categoryProduct']);
  }
  searchChange(searchTerm: string) {
    if (!searchTerm) {
      this.searchClick(searchTerm);
    }
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}

