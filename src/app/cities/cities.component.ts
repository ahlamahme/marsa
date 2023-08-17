import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})








export class AppComponent2 {
   qusir_paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
   totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo`;
   safagaa_paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit 
   Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
   totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo`;
   
   images: [string, string, string][] = [
    [this.qusir_paragraph, '../../assets/ship.jpg','qusier'],
    [this.safagaa_paragraph, '../../assets/diving.jpg','safagaa'],
    [this.qusir_paragraph, '../../assets/dolphn.jpg','port gharab']
  ];
  
  currentIndex = 0;

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length; 
  }
}
