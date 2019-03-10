import { TestBed } from '@angular/core/testing';

import { SignupapprovalService } from './signupapproval.service';

describe('SignupapprovalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignupapprovalService = TestBed.get(SignupapprovalService);
    expect(service).toBeTruthy();
  });
});
