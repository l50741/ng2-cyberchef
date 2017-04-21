import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  inputValue = '';
  inputControl = new FormControl();

  @Output() inputChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.inputControl.valueChanges
      .debounceTime(500)
      .subscribe(newValue => {
        this.inputValue = newValue;
        this.inputChanged.emit(newValue);
      });
  }

}
