import { NgModule ,AfterViewInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BlueHeadComponent } from './blue-head/blue-head.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LanguageDropdownComponent } from './language-dropdown/language-dropdown.component';
import { AppComponent2 } from './cities/cities.component';
import { CityTourComponent } from './city-tour/city-tour.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DestinationComponent } from './destination/destination.component';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import {MatMenuModule} from '@angular/material/menu';
//import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RangLiderComponent } from './rang-lider/rang-lider.component';
import { OffersComponent } from './offers/offers.component';
import { LiveabroadComponent } from './liveabroad/liveabroad.component';
import { AccommdationComponent } from './accommdation/accommdation.component';
import { ClintComponent } from './clint/clint.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlCarouselComponent } from './owl-carousel/owl-carousel.component';
import { CarouslCityComponent } from './carousl-city/carousl-city.component';

 









@NgModule({
  declarations: [
    AppComponent,
    BlueHeadComponent,
    LanguageDropdownComponent,
    CarouselComponent,
    NavBarComponent,
    DropdownComponent,
    DestinationComponent,
    AppComponent2,
    CityTourComponent,
    RangLiderComponent,
    OffersComponent,
    LiveabroadComponent,
    AccommdationComponent,
    ClintComponent,
    FooterComponent,
    TestComponent,
    OwlCarouselComponent,
    CarouslCityComponent,
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
   //CarouselModule.forRoot(),
    [BsDropdownModule.forRoot()],
    CommonModule,
    SlickCarouselModule,
    AccordionModule.forRoot(),
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,  
    CarouselModule,
    FontAwesomeModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
