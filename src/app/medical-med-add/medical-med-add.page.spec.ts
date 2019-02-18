import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalMedAddPage } from './medical-med-add.page';

describe('MedicalMedAddPage', () => {
  let component: MedicalMedAddPage;
  let fixture: ComponentFixture<MedicalMedAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalMedAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalMedAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
