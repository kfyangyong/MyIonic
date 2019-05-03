import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedetialPage } from './homedetial.page';

describe('HomedetialPage', () => {
  let component: HomedetialPage;
  let fixture: ComponentFixture<HomedetialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedetialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedetialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
