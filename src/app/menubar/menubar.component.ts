import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/services/service.service';
import { MenuBar } from 'src/models/MenuBar'
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{

  constructor(private service: ServiceService,private router: Router) {}

  menubar : any
  ngOnInit():void {
    this.getManuBarData();
  }

  async getManuBarData() {
    this.menubar = await this.service.getMenuBar().toPromise();
    console.log(this.menubar)
  }
}

