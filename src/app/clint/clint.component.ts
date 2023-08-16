import { Component } from '@angular/core';

@Component({
  selector: 'app-clint',
  templateUrl: './clint.component.html',
  styleUrls: ['./clint.component.css']
})
export class ClintComponent {
  cards = [
    { image: '../../assets/1.jpg', title: 'Card 1', content: 'This is the content of Card 1.' },
    { image: '../../assets/2.jpg', title: 'Card 2', content: 'This is the content of Card 2.' },
    { image: '../../assets/3.jpg', title: 'Card 3', content: 'This is the content of Card 3.' }
  ];

}
