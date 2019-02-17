import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineListPage } from './medicine-list.page';

describe('MedicineListPage', () => {
  let component: MedicineListPage;
  let fixture: ComponentFixture<MedicineListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
