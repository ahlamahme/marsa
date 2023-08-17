import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-owl-carousel',
  templateUrl: './owl-carousel.component.html',
  styleUrls: ['./owl-carousel.component.css']
})
export class OwlCarouselComponent {

  slidesStore2 = [
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
  slidesStore = [
    {image: '../../assets/dolphn.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/diving.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/divingfish.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/dolphn.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/dolphn.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/dolphn.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/divingfish.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image:  '../../assets/diving.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/divingfish.jpg',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
  ];


  customOptions: OwlOptions = {
    
    loop: true,
    navText: ['',''],
    merge:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    
    responsive: {
      0: {
        items: 3,
        margin:50,
       
      },
      400: {
        items: 1,
        
        
      },
      740: {
        items: 2
      },
      940: {
        items: 3,
        
      }
    },
    nav: false, 
   margin:50,
    stagePadding:30,
    
    
    
    
    
  }
  

}


