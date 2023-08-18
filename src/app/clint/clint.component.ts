import { Component } from '@angular/core';

@Component({
  selector: 'app-clint',
  templateUrl: './clint.component.html',
  styleUrls: ['./clint.component.css']
})
export class ClintComponent {
  cards = [
    { image: '../../assets/ahmed.png', title: 'Card 1', content: '“ I enjoyed a lot with you, as it was an enjoyable trip on the sea ,diving, horse riding “.' },
    { image: '../../assets/ahmed.png', title: 'Card 2', content: '“ I enjoyed a lot with you, as it was an enjoyable trip on the sea ,diving, horse riding “.' },
   
  ];

}
