import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Operation } from '../operations/services/operation-lookup.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  operations: Array<Operation>;

  @Output() recipeUpdated = new EventEmitter();

  constructor(private dragulaService: DragulaService) {
    dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value);
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onDropModel(value);
    });
    dragulaService.setOptions('operations', {
      removeOnSpill: (el: Element, source: Element): boolean => {
        return source.id === 'recipe-container';
      },
      copySortSource: false,
      copy: (el: Element, source: Element): boolean => {
        return source.id !== 'recipe-container';
      },
      accepts: (el: Element, target: Element, source: Element, sibling: Element): boolean => {
        return target.id === 'recipe-container';
      }
    });
  }

  ngOnInit() {
    this.operations = [];
  }

  pushUpdates() {
    this.recipeUpdated.emit(this.operations);
  }

  changeArg() {
    this.pushUpdates();
  }

  changeBoolean(checked, arg) {
    arg.value = checked;
    this.pushUpdates();
  }

  private onDropModel(value) {
    this.pushUpdates();
  }

}
