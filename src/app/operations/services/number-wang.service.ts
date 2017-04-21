import { Injectable } from '@angular/core';

@Injectable()
export class NumberWangService {

  constructor() { }

  /**
   * Numberwang operation. Remain indoors.
   *
   * @param {string} input
   * @returns {string}
   */
  run(input?: string) {
    if (!input) {
      return 'Let\'s play Wangernumb!';
    }
    const match = input.match(/\d+/);
    if (match) {
      return match[0] + '! That\'s Numberwang!';
    } else {
      // That's a bad miss!
      return 'Sorry, that\'s not Numberwang. Let\'s rotate the board!';
    }
  }
}
