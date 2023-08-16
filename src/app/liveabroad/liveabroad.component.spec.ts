import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveabroadComponent } from './liveabroad.component';

describe('LiveabroadComponent', () => {
  let component: LiveabroadComponent;
  let fixture: ComponentFixture<LiveabroadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveabroadComponent]
    });
    fixture = TestBed.createComponent(LiveabroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
