import { Component, AfterViewInit, } from '@angular/core';
import { Operation, OperationLookupService } from './operations/services/operation-lookup.service';
import { UtilsService } from './utils.service';
import { URLService } from './operations/services/url.service';
import { NumberWangService } from './operations/services/number-wang.service';
import { CharacterEncodingService } from './operations/services/character-encoding.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    OperationLookupService,
    UtilsService,
    URLService,
    NumberWangService,
    CharacterEncodingService
  ]
})
export class AppComponent implements AfterViewInit {
  recipe: Array<Operation>;
  input: string;
  output: string;

  constructor(private operationLookupService: OperationLookupService) {}

  public ngAfterViewInit() {

  }

  handleRecipeUpdated(value: Array<Operation>) {
    this.recipe = value;
    this.bake();
  }

  handleInputChanged(value: string) {
    this.input = value;
    this.bake();
  }

  bake() {
    if (!this.input) {
      this.input = '';
    }
    if (this.recipe && this.recipe.length > 0) {
      let value = this.input;
      _.forEach(this.recipe, (operation) => {
        value = this.operationLookupService.processOperation(operation, value);
      });
      this.output = value;
    } else {
      this.output = this.input;
    }
  }
}
