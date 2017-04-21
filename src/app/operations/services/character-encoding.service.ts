import { Injectable } from '@angular/core';
import { UtilsService } from '../../utils.service';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CharacterEncodingService {
  IO_FORMAT = ['UTF8', 'UTF16', 'UTF16LE', 'UTF16BE', 'Latin1', 'Windows-1251', 'Hex', 'Base64'];

  constructor(private utilsService: UtilsService) {
    let test = this.utilsService;
  }

  /**
   * Text encoding operation.
   *
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  run(input, args) {
    if (args && args.inputFormat && args.outputFormat) {
      const inputFormat = args.inputFormat;
      const outputFormat = args.outputFormat;

      if (inputFormat === 'Windows-1251') {
        input = this.utilsService.win1251ToUnicode(input);
        input = CryptoJS.enc.Utf8.parse(input);
      } else {
        input = this.utilsService.getFormat(inputFormat).parse(input);
      }

      if (outputFormat === 'Windows-1251') {
        input = CryptoJS.enc.Utf8.stringify(input);
        return this.utilsService.unicodeToWin1251(input);
      } else {
        return this.utilsService.getFormat(outputFormat).stringify(input);
      }
    } else {
      return input;
    }
  }

  getAvailableFormats() {
    return this.IO_FORMAT;
  }

}
