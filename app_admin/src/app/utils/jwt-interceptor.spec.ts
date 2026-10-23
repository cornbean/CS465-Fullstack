import { TestBed } from '@angular/core/testing';
import { JwtInterceptor } from './jwt-interceptor'; // Ensure filename path matches exactly
import { AuthenticationService } from '../services/authentication';

describe('JwtInterceptor', () => {
  let interceptor: JwtInterceptor;

  beforeEach(() => {
    // Create a bare-minimum mock configuration object for dependencies
    const authServiceMock = {
      isLoggedIn: () => false,
      getToken: () => ''
    };

    TestBed.configureTestingModule({
      providers: [
        JwtInterceptor,
        { provide: AuthenticationService, useValue: authServiceMock }
      ]
    });

    // Cleanly fetch the class instance out of the TestBed context wrapper
    interceptor = TestBed.inject(JwtInterceptor);
  });

  it('should be created', () => {
    // Assert the interceptor class object is successfully instantiated
    expect(interceptor).toBeTruthy();
  });
});
