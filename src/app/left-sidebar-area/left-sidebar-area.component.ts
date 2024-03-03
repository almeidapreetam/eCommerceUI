import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-left-sidebar-area',
  templateUrl: './left-sidebar-area.component.html',
  styleUrls: ['./left-sidebar-area.component.css']
})
export class LeftSidebarAreaComponent implements OnInit {

  category : any[]  = [];
  brand : any[]  = [];
  constructor(private service: ServiceService,private router: Router) {}
  ngOnInit() {
    this.getLeftpanelData();
  }
  async getLeftpanelData() {
    try {
      const leftpanelData = await this.service.getLeftSidePanelData().toPromise();
      console.log("leftpanelData", leftpanelData);
      if (leftpanelData) {
        this.category = leftpanelData.category;
        this.brand = leftpanelData.brand;
        console.log("category", this.category);
        console.log("brand", this.brand);
      }
    } catch (error) {
      console.error("Error fetching left panel data:", error);
    }
  }
}
