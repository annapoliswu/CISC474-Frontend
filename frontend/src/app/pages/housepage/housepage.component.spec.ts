import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousepageComponent } from './housepage.component';

describe('HousepageComponent', () => {
  let component: HousepageComponent;
  let fixture: ComponentFixture<HousepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
