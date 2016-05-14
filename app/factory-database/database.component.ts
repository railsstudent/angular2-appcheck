import {Component, OnInit} from 'angular2/core';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";
import {Router, RouteParams} from 'angular2/router';

import {DonutChartComponent} from './donutchart.component';

import {DatabaseListService} from '../factory-system/service/database-list.service';
import {DatabaseService} from './service/database.service';
import {DatabaseInstance} from './model/database-instance';
import {FactoryService} from '../factory-list/service/factory.service';

@Component({
    selector: 'database',
    directives: [MATERIAL_DIRECTIVES, DonutChartComponent ],
    providers: [DatabaseService, DatabaseListService, FactoryService],
    templateUrl: 'app/factory-database/template/database.html'
})
export class DatabaseComponent implements OnInit {

  dbInstance : DatabaseInstance;
  dbId : number;
  factory: string;


  ngOnInit() {
    if (this._routeParams.get('dbId') && this._routeParams.get('code')) {
      this.dbId = Number(this._routeParams.get('dbId'));
      this.factory = this._routeParams.get('code')
      this.dbInstance = this._databaseService.getDatbaseById(this.factory, this.dbId);
    } else {
      this.dbId = -1;
      this.factory = '';
      this.dbInstance = null;
    }
  }

  constructor(private _router: Router,
    private _routeParams : RouteParams,
    private _databaseService : DatabaseService) {

  }

  onReturn(dbInstance) {
    if (this.dbInstance) {
      this._router.navigate(["FactorySummary", { code: this.dbInstance.factory} ]);
    } else {
      // default to TAA
      this._router.navigate(["FactorySummary", { code: 'TAA' } ]);
    }
  }

}
