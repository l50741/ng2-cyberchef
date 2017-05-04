import { Injectable } from '@angular/core';
import { NumberWangService } from './number-wang.service';
import { URLService } from './url.service';
import { CharacterEncodingService } from './character-encoding.service';
import { UtilsService } from '../../utils.service';

import * as _ from 'lodash';

export interface OperationArgument {
  name: string,
  title: string;
  type: string,
  options?: Array<string>,
  value: any
}

export interface Operation {
  name: string;
  operationFunction: any;
  args?: Array<OperationArgument>;
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
        args: [
          {
            name: 'encodeAll',
            title: 'Encode all special chars',
            type: 'boolean',
            value: false
          }
        ]
      },
      {
        name: 'Text Encoding',
        operationFunction: (input, args) => this.characterEncodingService.run(input, args),
        args: [
          {
            name: 'input',
            title: 'Input type',
            type: 'options',
            options: this.characterEncodingService.getAvailableFormats(),
            value: 'UTF8'
          },
          {
            name: 'output',
            title: 'Output type',
            type: 'options',
            options: this.characterEncodingService.getAvailableFormats(),
            value: 'UTF8'
          }
        ]
      }
    ];
    _.forEach(this.operations, (operation) => {
      this.names.push(operation.name);
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
