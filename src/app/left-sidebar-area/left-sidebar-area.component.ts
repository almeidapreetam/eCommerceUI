import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/services/dataService';
import { ServiceService } from 'src/services/service.service';
import { ProductFilter } from 'src/models/ProductFilter';

@Component({
  selector: 'app-left-sidebar-area',
  templateUrl: './left-sidebar-area.component.html',
  styleUrls: ['./left-sidebar-area.component.css']
})
export class LeftSidebarAreaComponent implements OnInit {

  category : any[]  = [];
  selectedCategory: number[] = [];
  brand : any[]  = [];
  selectedBrand : any[]  = [];
  productFilter = new ProductFilter(); 

  constructor(private service: ServiceService,private router: Router, private dataService : DataService) {}
  ngOnInit() {
    this.getLeftpanelData();
    this.dataService.productFilter$.subscribe(data => {
      this.productFilter = data;
    });
  }
  async getLeftpanelData() {
    try {
      const leftpanelData = await this.service.getLeftSidePanelData().toPromise();
      console.log("leftpanelData", leftpanelData);
      if (leftpanelData) {
        this.category = leftpanelData.category;
        this.brand = leftpanelData.brand;
      }
    } catch (error) {
      console.error("Error fetching left panel data:", error);
    }
  }
   onCategoryChanged() {
    this.selectedCategory = [];
    for (let cat of this.category) {
      if (cat.checked) {
        this.selectedCategory.push(cat.categoryId);
      }
    }
    this.productFilter.CategoryId = this.selectedCategory
    this.dataService.setProductFilter(this.productFilter);
  }
  onBrandChanged() {
    this.selectedBrand = [];
    for (let bra of this.brand) {
      if (bra.checked) {
        this.selectedBrand.push(bra.brandId);
      }
    }
    this.productFilter.Brand = this.selectedBrand
    this.dataService.setProductFilter(this.productFilter);
  }
}
