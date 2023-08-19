import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlueHeadComponent } from './new-blue-head.component';

describe('NewBlueHeadComponent', () => {
  let component: NewBlueHeadComponent;
  let fixture: ComponentFixture<NewBlueHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBlueHeadComponent]
    });
    fixture = TestBed.createComponent(NewBlueHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
