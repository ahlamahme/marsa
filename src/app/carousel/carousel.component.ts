import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slidesStore = [
    {image: '../../assets/1.jpg'},
    {image: '../../assets/2.jpg'},
    {image: '../../assets/3.jpg'},
    {image: '../../assets/4.jpg'},
    {image: '../../assets/1.jpg'},
    {image: '../../assets/3.jpg'},
    {image: '../../assets/2.jpg'},
    {image: '../../assets/4.jpg'},
    {image: '../../assets/2.jpg'},
  ];

  customOptions: OwlOptions = {
    
    loop: true,
    navText: ['<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right"></i>' ],
    merge:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    items: 1,
    nav: true,
    navSpeed: 700,   
    responsive: {
      0: {
        items: 1,      
      },
      400: {
        items: 1,       
      },
      740: {
        items: 1
      },
      940: {
        items: 1,       
      }
    },
  }
  selectedOption1: string = '';
  selectedOption2: string = '';
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  things: string[] = ['Option 1', 'Option 2', 'Option 3'];

}
