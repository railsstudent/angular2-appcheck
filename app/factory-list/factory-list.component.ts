import {Component, OnInit} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {Router} from 'angular2/router';

import {FactoryService} from './service/factory.service';
import {Factory} from './model/factory';

// http://stackoverflow.com/questions/35685801/angular-2-event-catching-between-sibling-components
@Component({
  selector: 'factory-list',
  templateUrl: 'app/factory-list/template/factory-list.html' ,
  directives: [MATERIAL_DIRECTIVES] 
})
export class FactoryListComponent implements OnInit {

  factories: Array<Factory>;

  ngOnInit() {
    this.factories = this._factoryService.getFactories();
  }

  //  factory
  constructor(private _router: Router, private _factoryService: FactoryService) {
  }

  onSelectFactory(factory: Factory) {
     console.log('Selected factory code: ' + factory.code + ', factory name: ' + factory.name);
     this._router.navigate(['FactorySummary',  { code: factory.code } ]);
  }
}
