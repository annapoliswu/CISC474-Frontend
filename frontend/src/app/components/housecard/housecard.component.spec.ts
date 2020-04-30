import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousecardComponent } from './housecard.component';

describe('HousecardComponent', () => {
  let component: HousecardComponent;
  let fixture: ComponentFixture<HousecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
