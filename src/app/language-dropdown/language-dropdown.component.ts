import { Component } from '@angular/core';

interface Language {
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.css']
})

export class LanguageDropdownComponent {

  languages: Language[] = [
    { name: 'English', flag: 'us' },
    { name: 'French', flag: 'fr' },
    { name: 'Spanish', flag: 'es' }
    // Add more languages as needed
  ];

  selectedLanguage: Language = this.languages[0];

  changeLanguage(language: Language) {
    this.selectedLanguage = language;
    // Implement language change logic here
  }
}