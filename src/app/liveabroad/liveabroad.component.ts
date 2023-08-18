import { Component } from '@angular/core';

@Component({
  selector: 'app-liveabroad',
  templateUrl: './liveabroad.component.html',
  styleUrls: ['./liveabroad.component.css']
})
export class LiveabroadComponent {

  // cards = [
  //   { image: '../../assets/1.jpg', title: 'Card 1', content: 'This is the content of Card 1.' },
  //   { image: '../../assets/2.jpg', title: 'Card 2', content: 'This is the content of Card 2.' },
  //   { image: '../../assets/3.jpg', title: 'Card 3', content: 'This is the content of Card 3.' }
  // ];



  cards = [
    {
      imageUrl: '../../assets/ship.jpg',
      title: 'LIVEABOARD SATAYA DOLPHIN HOUSE',
      description: 'Marsa ALAM'
    },
    {
      imageUrl: '../../assets/ship.jpg',
      title: 'LIVEABOARD SATAYA DOLPHIN HOUSE',
      description: 'Marsa ALAM'
    },
    {
      imageUrl: '../../assets/ship.jpg',
      title: 'LIVEABOARD SATAYA DOLPHIN HOUSE',
      description: 'Marsa ALAM'
    }
  ];

}
