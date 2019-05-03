import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydetailPage } from './mydetail.page';

describe('MydetailPage', () => {
  let component: MydetailPage;
  let fixture: ComponentFixture<MydetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
