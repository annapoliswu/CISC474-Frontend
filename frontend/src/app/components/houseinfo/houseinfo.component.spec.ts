import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseinfoComponent } from './houseinfo.component';

describe('HouseinfoComponent', () => {
  let component: HouseinfoComponent;
  let fixture: ComponentFixture<HouseinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
