import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommdationComponent } from './accommdation.component';

describe('AccommdationComponent', () => {
  let component: AccommdationComponent;
  let fixture: ComponentFixture<AccommdationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccommdationComponent]
    });
    fixture = TestBed.createComponent(AccommdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
