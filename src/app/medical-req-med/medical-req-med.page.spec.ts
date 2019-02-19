import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalReqMedPage } from './medical-req-med.page';

describe('MedicalReqMedPage', () => {
  let component: MedicalReqMedPage;
  let fixture: ComponentFixture<MedicalReqMedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalReqMedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalReqMedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
