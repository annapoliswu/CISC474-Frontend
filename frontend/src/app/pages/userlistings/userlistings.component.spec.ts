import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistingsComponent } from './userlistings.component';

describe('UserlistingsComponent', () => {
  let component: UserlistingsComponent;
  let fixture: ComponentFixture<UserlistingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlistingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
