import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysetPage } from './myset.page';

describe('MysetPage', () => {
  let component: MysetPage;
  let fixture: ComponentFixture<MysetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
