import { TestBed } from '@angular/core/testing';

import { AllocationApiService } from './allocation-api.service';

describe('AllocationApiService', () => {
  let service: AllocationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
