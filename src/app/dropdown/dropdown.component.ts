import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  dropdownItems: string[] = ['Item 1', 'Item 2', 'Item 3'];

  selectItem(item: string) {
    console.log('Selected item:', item);
    // Add your logic for handling the selected item here
  }
}

