import {Component, OnInit } from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {AppListComponent} from './app-list.component';
import {DatabaseListComponent} from './database-list.component';
import {RouteParams} from 'angular2/router';
import {Factory} from '../factory-list/model/factory';
import {FactoryService} from '../factory-list/service/factory.service';

@Component({
  selector: 'factory-summary',
  templateUrl: 'app/factory-system/template/factory-summary.html' ,
  providers: [FactoryService],
  directives: [AppListComponent, DatabaseListComponent, MATERIAL_DIRECTIVES]
})
export class FactorySummaryComponent implements OnInit {

  selectedFactory : Factory;
  data: any = {
     viewModeList: ['Application', 'Database'],
     viewMode: 'Application'
  };

  visible : any = {
     application: false,
     database: false
  };

  ngOnInit() {
    this.onChange(this.data.viewMode);
    let code = this._routeParams.get('code');
    this.selectedFactory = code ?
        this._factoryService.getFactory(code) :
        new Factory("TBD", "No factory selected");
  }

  //  factory summary
  constructor(private _routeParams: RouteParams,
      private _factoryService: FactoryService) {
  }

  onChange(viewMode :string) {
      console.log("selected viewMode: " + viewMode);
      this.visible.application = _.isEqual(viewMode, 'Application');
      this.visible.database = _.isEqual(viewMode, 'Database');
  }
}
