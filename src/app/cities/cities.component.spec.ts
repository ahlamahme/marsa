import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent2 } from './cities.component';

describe('CitiesComponent', () => {
  let component: AppComponent2;
  let fixture: ComponentFixture<AppComponent2>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent2]
    });
    fixture = TestBed.createComponent(AppComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
