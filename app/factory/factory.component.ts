import {Component, EventEmitter, Output} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {Router} from 'angular2/router';

import {FactoryService} from './service/factory.service';
import {Factory} from './model/factory';

// http://stackoverflow.com/questions/35685801/angular-2-event-catching-between-sibling-components
@Component({
  selector: 'factory-list',
  templateUrl: 'app/factory/template/factory.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [FactoryService]
})
export class FactoryComponent {

  factories: Array<Factory>;

  //  factory
  constructor(private _router: Router, _factoryService: FactoryService) {
    this.factories = _factoryService.getFactories();
  }

  onSelectFactory(factory: Factory) {
     console.log('Selected factory code: ' + factory.code + ', factory name: ' + factory.name);
     this._router.navigate(['FactoryAppList',  { code: factory.code } ]);
  }
}
