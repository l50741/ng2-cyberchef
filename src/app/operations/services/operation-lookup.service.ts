import { Injectable } from '@angular/core';
import { NumberWangService } from './number-wang.service';
import { URLService } from './url.service';
import { CharacterEncodingService } from './character-encoding.service';
import { UtilsService } from '../../utils.service';

import * as _ from 'lodash';

export interface Operation {
  name: string;
  operationFunction: any;
  args?: any;
}

@Injectable()
export class OperationLookupService {
  operations: Array<Operation>;
  names: Array<string>;

  constructor(private utilsService: UtilsService,
    private urlService: URLService,
    private numberWangService: NumberWangService,
    private characterEncodingService: CharacterEncodingService) {
    this.names = [];
    this.operations = [
      {
        name: 'Numberwang',
        operationFunction: (input, args) => this.numberWangService.run(input)
      },
      {
        name: 'Decode URL',
        operationFunction: (input, args) => this.urlService.runFrom(input, args)
      },
      {
        name: 'Encode URL',
        operationFunction: (input, args) => this.urlService.runTo(input, args),
        args: {
          encodeAll: false
        }
      }
    ];
    this.addEncodingOperations();
    _.forEach(this.operations, (operation) => {
      this.names.push(operation.name);
    });
  }

  addEncodingOperations() {
    const formats = this.characterEncodingService.getAvailableFormats();
    _.forEach(formats, (format) => {
      if (format !== 'Latin1') {
        this.operations.push({
          name: 'To ' + format,
          operationFunction: (input, args) => this.characterEncodingService.run(input, args),
          args: {
            inputFormat: 'Latin1',
            outputFormat: format
          }
        });
      }
    });
    _.forEach(formats, (format) => {
      if (format !== 'Latin1') {
        this.operations.push({
          name: 'From ' + format,
          operationFunction: (input, args) => this.characterEncodingService.run(input, args),
          args: {
            inputFormat: format,
            outputFormat: 'Latin1'
          }
        });
      }
    });
  }

  getOperationNames() {
    return this.names;
  }

  getOperations() {
    return this.operations;
  }

  getFunctionByName(name: string) {
    return _.find(this.operations, { 'name': name }).operationFunction;
  }

  processOperation(operation: Operation, value: string) {
    const operationFunction = this.getFunctionByName(operation.name);
    return operationFunction(value, operation.args);
  }

}
