import { TestBed } from '@angular/core/testing';

import { AppParametersService } from './app-parameters.service';

describe('AppParametersService', () => {
  let service: AppParametersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppParametersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
