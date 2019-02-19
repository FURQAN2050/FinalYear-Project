import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperMedicalListPage } from './super-medical-list.page';

describe('SuperMedicalListPage', () => {
  let component: SuperMedicalListPage;
  let fixture: ComponentFixture<SuperMedicalListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperMedicalListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperMedicalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
