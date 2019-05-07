import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloothPage } from './blooth.page';

describe('BloothPage', () => {
  let component: BloothPage;
  let fixture: ComponentFixture<BloothPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloothPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloothPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
