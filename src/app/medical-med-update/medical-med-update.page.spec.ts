import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalMedUpdatePage } from './medical-med-update.page';

describe('MedicalMedUpdatePage', () => {
  let component: MedicalMedUpdatePage;
  let fixture: ComponentFixture<MedicalMedUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalMedUpdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalMedUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
