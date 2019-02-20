import { TestBed } from '@angular/core/testing';

import { MedicalStoreService } from './medical-store.service';

describe('MedicalStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalStoreService = TestBed.get(MedicalStoreService);
    expect(service).toBeTruthy();
  });
});
