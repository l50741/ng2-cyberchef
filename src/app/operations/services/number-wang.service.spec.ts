import { TestBed, inject } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { NumberWangService } from './number-wang.service';

describe('NumberWangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [NumberWangService]
    });
  });

  it('should ...', inject([NumberWangService], (service: NumberWangService) => {
    expect(service).toBeTruthy();
    expect(service.run()).toBe('Let\'s play Wangernumb!');
    expect(service.run('5')).toBe('5! That\'s Numberwang!');
    expect(service.run('555.5')).toBe('555! That\'s Numberwang!');
    expect(service.run('-5')).toBe('5! That\'s Numberwang!');
    expect(service.run('5d')).toBe('5! That\'s Numberwang!');
    expect(service.run('d')).toBe('Sorry, that\'s not Numberwang. Let\'s rotate the board!');
  }));
});
