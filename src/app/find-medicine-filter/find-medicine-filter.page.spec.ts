import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMedicineFilterPage } from './find-medicine-filter.page';

describe('FindMedicineFilterPage', () => {
  let component: FindMedicineFilterPage;
  let fixture: ComponentFixture<FindMedicineFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMedicineFilterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMedicineFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
