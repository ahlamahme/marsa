import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouslCityComponent } from './carousl-city.component';

describe('CarouslCityComponent', () => {
  let component: CarouslCityComponent;
  let fixture: ComponentFixture<CarouslCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouslCityComponent]
    });
    fixture = TestBed.createComponent(CarouslCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
