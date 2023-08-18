import { Component ,AfterViewInit  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare var $: any; // Import jQuery




@Component({
  selector: 'app-accommdation',
  templateUrl: './accommdation.component.html',
  styleUrls: ['./accommdation.component.css']
})

export class AccommdationComponent  {

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
    {image: '../../assets/a-3.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/a-2.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/a-3.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/a-4.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/a-2.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/a-2.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/a-3.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image:  '../../assets/a-4.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
    {image: '../../assets/a-2.png',caption:'Explore the oldest of the 7 wonders of the Ancient world at giza',description:'Cairo'},
  ];

  customOptions: OwlOptions = {
    loop: true,
    nav:true,
    navText: [ '<i class=" fa fa-chevron-left"></i>', '<i class=" fa fa-chevron-right"></i>' ],
    merge:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 4,
        margin:50,       
      },
      400: {
        items: 4,       
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,       
      }
    },   
   margin:30,
    stagePadding:30,
  }
}