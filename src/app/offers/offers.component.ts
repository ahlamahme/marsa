import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent {

  itemsPerSlide = 3;
 
  slides = [
    {image: '../../assets/under-sea.jpg'},
    {image: '../../assets/under-sea.jpg'},
    {image: '../../assets/under-sea.jpg'},
    {image: '../../assets/under-sea.jpg'},
    {image: '../../assets/under-sea.jpg'},
    {image: '../../assets/under-sea.jpg'},
    {image: '../../assets/under-sea.jpg'},
    {image: '../../assets/under-sea.jpg'},
    {image: '../../assets/under-sea.jpg'},
    
  ];

  title = 'ngSlick';

  //slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite":true,
  };

}
