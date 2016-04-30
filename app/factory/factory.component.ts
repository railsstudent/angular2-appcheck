import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

import {FactoryService} from './service/factory.service';

@Component({
  selector: 'factory-list',
  template: `
    <h1>testing</h1>
  `,
  providers: [FactoryService]
})
export class FactoryComponent {

  //  factory
  constructor() {

  }
}
