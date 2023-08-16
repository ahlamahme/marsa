import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangLiderComponent } from './rang-lider.component';

describe('RangLiderComponent', () => {
  let component: RangLiderComponent;
  let fixture: ComponentFixture<RangLiderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangLiderComponent]
    });
    fixture = TestBed.createComponent(RangLiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
