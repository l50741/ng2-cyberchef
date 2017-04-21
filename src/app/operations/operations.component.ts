import { Component, OnInit } from '@angular/core';
import { OperationLookupService, Operation } from './services/operation-lookup.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  numberWang: string;
  url: string;
  operations: Array<Operation>;
  services: Array<any>;

  constructor(private lookup: OperationLookupService) { }

  ngOnInit() {
    this.operations = this.lookup.getOperations();
  }

}
