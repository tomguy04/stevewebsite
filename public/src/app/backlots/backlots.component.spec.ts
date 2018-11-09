import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklotsComponent } from './backlots.component';

describe('BacklotsComponent', () => {
  let component: BacklotsComponent;
  let fixture: ComponentFixture<BacklotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacklotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
