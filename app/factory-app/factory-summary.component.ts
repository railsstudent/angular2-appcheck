import {Component, OnInit } from 'angular2/core';
import {FactoryAppListComponent} from './factory-app.component';
import {DatabaseListComponent} from './database-list.component';


@Component({
  selector: 'factory-summary',
  templateUrl: 'app/factory-app/template/factory-summary.html' ,
  directives: [FactoryAppListComponent, DatabaseListComponent]
})
export class FactorySummaryComponent {

  //  factory summary
  constructor() {
  }


}
