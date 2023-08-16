import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueHeadComponent } from './blue-head.component';

describe('BlueHeadComponent', () => {
  let component: BlueHeadComponent;
  let fixture: ComponentFixture<BlueHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlueHeadComponent]
    });
    fixture = TestBed.createComponent(BlueHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
