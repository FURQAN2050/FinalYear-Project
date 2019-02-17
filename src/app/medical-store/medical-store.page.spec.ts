import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStorePage } from './medical-store.page';

describe('MedicalStorePage', () => {
  let component: MedicalStorePage;
  let fixture: ComponentFixture<MedicalStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalStorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
