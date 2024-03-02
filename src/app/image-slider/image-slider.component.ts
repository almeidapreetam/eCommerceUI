import { Component, OnInit } from '@angular/core';
import { ImageSlider } from 'src/models/ImageSlider';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit   {

  imageslider : ImageSlider[] = [];
  constructor(private service: ServiceService){}

  ngOnInit():void {
    this.getImageSlider();
  }

  async getImageSlider() {
    this.imageslider = await  this.service.getImageSlider().toPromise();
    console.log(this.imageslider);
  }

}
