import { Injectable } from '@angular/core';
import { UtilsService } from '../../utils.service';

@Injectable()
export class URLService {

  constructor(private utilsService: UtilsService) { }

  /**
   * URL Encode operation.
   *
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  runTo(input: string, args?) {
    let encodeAll = false;
    if (args && args.encodeAll) {
      encodeAll = args.encodeAll;
    }
    return encodeAll ? this._encodeAllChars(input) : encodeURI(input);
  }


  /**
   * URL Decode operation.
   *
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  runFrom(input: string, args?) {
    const data = input.replace(/\+/g, '%20');
    try {
      return decodeURIComponent(data);
    } catch (err) {
      return decodeURI(data);
    }
  }


  /**
   * Parse URI operation.
   *
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  runParse(input: string, args?) {
    if (!document) {
      throw 'This operation only works in a browser.';
    }

    const a = document.createElement('a');

    // Overwrite base href which will be the current CyberChef URL to reduce confusion.
    a.href = 'http://example.com/';
    a.href = input;

    if (a.protocol) {
      let output = '';
      if (a.hostname !== window.location.hostname) {
        output = 'Protocol:\t' + a.protocol + '\n';
        if (a.hostname) {
          output += 'Hostname:\t' + a.hostname + '\n';
        }
        if (a.port) {
          output += 'Port:\t\t' + a.port + '\n';
        }
      }

      if (a.pathname && a.pathname !== window.location.pathname) {
        let pathname = a.pathname;
        if (pathname.indexOf(window.location.pathname) === 0) {
          pathname = pathname.replace(window.location.pathname, '');
        }
        if (pathname) {
          output += 'Path name:\t' + pathname + '\n';
        }
      }

      if (a.hash && a.hash !== window.location.hash) {
        output += 'Hash:\t\t' + a.hash + '\n';
      }

      if (a.search && a.search !== window.location.search) {
        output += 'Arguments:\n';
        const args_ = (a.search.slice(1, a.search.length)).split('&');
        const splitArgs = []
        let padding = 0;
        for (let i = 0; i < args_.length; i++) {
          splitArgs.push(args_[i].split('='));
          padding = (splitArgs[i][0].length > padding) ? splitArgs[i][0].length : padding;
        }
        for (let i = 0; i < splitArgs.length; i++) {
          output += '\t' + this.utilsService.padRight(splitArgs[i][0], padding);
          if (splitArgs[i].length > 1 && splitArgs[i][1].length) {
            output += ' = ' + splitArgs[i][1] + '\n';
          } else {
            output += '\n';
          }
        }
      }

      return output;
    }

    return 'Invalid URI';
  }

  /**
   * URL encodes additional special characters beyond the standard set.
   *
   * @private
   * @param {string} str
   * @returns {string}
   */
  _encodeAllChars(str: string) {
    //TODO Do this programatically
    return encodeURIComponent(str)
      .replace(/!/g, '%21')
      .replace(/#/g, '%23')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A')
      .replace(/\-/g, '%2D')
      .replace(/\./g, '%2E')
      .replace(/_/g, '%5F')
      .replace(/~/g, '%7E');
  }

}
