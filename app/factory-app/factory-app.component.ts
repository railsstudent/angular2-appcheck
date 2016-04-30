import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {FactoryAppListService} from "./service/factory-app.service";

@Component({
  selector: 'factory-app-list',
  templateUrl: 'app/factory-app/template/factory-app.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [FactoryAppListService]
})
export class FactoryAppListComponent {

  //factories: Array<Factory>;

  //  factory
  constructor() {
//    this.factories = _factoryService.getFactories();
  }

  // loadFactory(factory: Factory) {
  //    console.log('Selected factory code: ' + factory.name + ', factory name: ' + factory.name);
  // }
}
