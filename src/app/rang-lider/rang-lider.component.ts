import { Component } from '@angular/core';

@Component({
  selector: 'app-rang-lider',
  templateUrl: './rang-lider.component.html',
  styleUrls: ['./rang-lider.component.css']
})
export class RangLiderComponent {
  minValue = 0;
  maxValue = 100;
  stepValue = 1;
  sliderValue = 50;

}
