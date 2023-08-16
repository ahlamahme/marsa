import { Component } from '@angular/core';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})



export class TestComponent {


options = ['English', 'Arabic', 'Frensh'];
  selectedOption: string;

  constructor() {
    this.selectedOption = this.options[0]; // Set the initial selected option
  }

  getFlagCode(option: string): string {
    // Map each option to its corresponding flag code
    switch (option) {
      case 'Option 1':
        return 'us';
      case 'Option 2':
        return 'gb';
      case 'Option 3':
        return 'fr';
      default:
        return '';
    }
  }
  }


