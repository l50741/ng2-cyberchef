import { Component, OnInit, Pipe, PipeTransform, Injectable } from '@angular/core';
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

 @Pipe({
   name:'filter',
   pure:false
 })
@Injectable()
 export class SearchPipe implements PipeTransform {
   transform(items :any ,term :any): any {
     if(term === undefined) return items;
     return items.filter((item) => {
       return item.name.toLowerCase().includes(term.toLowerCase());
     })
   }
 }
