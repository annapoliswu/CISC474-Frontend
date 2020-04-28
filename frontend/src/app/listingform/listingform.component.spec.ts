import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingformComponent } from './listingform.component';

describe('ListingformComponent', () => {
  let component: ListingformComponent;
  let fixture: ComponentFixture<ListingformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
