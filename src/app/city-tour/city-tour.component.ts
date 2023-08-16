import { Component } from '@angular/core';

@Component({
  selector: 'app-city-tour',
  templateUrl: './city-tour.component.html',
  styleUrls: ['./city-tour.component.css']
})
export class CityTourComponent {


  itemsPerSlide = 3;
 
  slides = [
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

  title = 'ngSlick';

  //slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false
  };

  
  

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}

  

  

