import {Component, OnInit } from 'angular2/core';
import {FactoryAppListComponent} from './factory-app.component';
import {DatabaseListComponent} from './database-list.component';
import {RouteParams} from 'angular2/router';
import {Factory} from '../factory/model/factory';
import {FactoryService} from '../factory/service/factory.service';


@Component({
  selector: 'factory-summary',
  templateUrl: 'app/factory-app/template/factory-summary.html' ,
  providers: [FactoryService],
  directives: [FactoryAppListComponent, DatabaseListComponent]
})
export class FactorySummaryComponent implements OnInit {

  selectedFactory : Factory;


  ngOnInit() {
    let code = this._routeParams.get('code');
    this.selectedFactory = code ?
        this._factoryService.getFactory(code) :
        new Factory("TBD", "No factory selected");
  }

  //  factory summary
  constructor(private _routeParams: RouteParams,
      private _factoryService: FactoryService) {
  }
}
