import { TestBed } from '@angular/core/testing';

import { AuthInterceptiorService } from './auth.interceptior.service';

describe('Auth.NterceptiorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service:AuthInterceptiorService = TestBed.get(AuthInterceptiorService);
    expect(service).toBeTruthy();
  });
});
