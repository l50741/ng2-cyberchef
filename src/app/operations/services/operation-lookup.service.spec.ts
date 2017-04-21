import { TestBed, inject } from '@angular/core/testing';

import { OperationLookupService } from './operation-lookup.service';

describe('OperationLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperationLookupService]
    });
  });

  it('should ...', inject([OperationLookupService], (service: OperationLookupService) => {
    expect(service).toBeTruthy();
  }));
});
