import {Component, EventEmitter, Output} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

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

  // emit clicked factory to parent component
  @Output()
  showFactory = new EventEmitter<Factory>();

  //  factory
  constructor(_factoryService: FactoryService) {
    this.factories = _factoryService.getFactories();
  }

  loadFactory(factory: Factory) {
     console.log('Selected factory code: ' + factory.name + ', factory name: ' + factory.name);
     this.showFactory.emit(factory);
  }
}
