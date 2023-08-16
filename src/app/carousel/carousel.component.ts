import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {



  options = ['Option 1', 'Option 2', 'Option 3'];
  things = ['Option 4', 'Option 5', 'Option 6'];
  selectedOption1: string ='';
  selectedOption2: string ='';


}
