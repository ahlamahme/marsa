import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOfeerComponent } from './card-ofeer.component';

describe('CardOfeerComponent', () => {
  let component: CardOfeerComponent;
  let fixture: ComponentFixture<CardOfeerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardOfeerComponent]
    });
    fixture = TestBed.createComponent(CardOfeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
