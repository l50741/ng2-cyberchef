import { TestBed, inject } from '@angular/core/testing';

import { CharacterEncodingService } from './character-encoding.service';

describe('CharacterEncodingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterEncodingService]
    });
  });

  it('should ...', inject([CharacterEncodingService], (service: CharacterEncodingService) => {
    expect(service).toBeTruthy();
  }));
});
