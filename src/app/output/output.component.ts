import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Input()
  output: string = '';
  @Input()
  timings: any = {
    duration: 0,
    start: 0,
    end: 0
  };

  constructor() {
  }

  ngOnInit() {
  }

}
