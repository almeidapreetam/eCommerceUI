import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from 'src/services/service.service';


@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css'],
  
})
export class HomeCategoryComponent implements OnInit {
  homeCategory : any[] = [];
  constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.fetchHomeCategory();
  }

   async fetchHomeCategory(){
    this.homeCategory = await  this.service.fetchHomeCategory().toPromise();
    console.log("HomeCategory",this.homeCategory);
  }
  redirectToUrl(url : string) {
    alert()
  }
}