import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundPage } from './found.page';

describe('FoundPage', () => {
  let component: FoundPage;
  let fixture: ComponentFixture<FoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
