import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

import {FactoryService} from './service/factory.service';
import {Factory} from './model/factory';

@Component({
  selector: 'factory-list',
  templateUrl: 'app/factory/template/factory.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [FactoryService]
})
export class FactoryComponent {

  factories: Array<Factory>;
  
  //  factory
  constructor(_factoryService: FactoryService) {
    this.factories = _factoryService.getFactories();
  }
}
