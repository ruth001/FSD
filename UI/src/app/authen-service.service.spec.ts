import { TestBed } from '@angular/core/testing';

import { AuthenServiceService } from './authen-service.service';

describe('AuthenServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenServiceService = TestBed.get(AuthenServiceService);
    expect(service).toBeTruthy();
  });
});
