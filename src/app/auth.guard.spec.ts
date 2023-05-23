import { TestBed } from '@angular/core/testing';
import { CookieService, cookieServiceFactory } from 'ngx-cookie';

import { AuthGuard } from './auth.guard';
import { modules, services } from './imports';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [modules, services],
      providers: [
        {provide: CookieService, useClass: CookieService }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
