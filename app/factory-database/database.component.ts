import {Component, OnInit} from 'angular2/core';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";
import {Router, RouteParams} from 'angular2/router';

import {DatabaseListService} from '../factory-app/service/database-list.service';
import {DatabaseService} from './service/database.service';
import {DatabaseInstance} from './model/database-instance';
import {FactoryService} from '../factory/service/factory.service';


@Component({
    selector: 'database',
    directives: [MATERIAL_DIRECTIVES ],
    providers: [DatabaseService, DatabaseListService, FactoryService],
    templateUrl: 'app/factory-database/template/database.html'
})
export class DatabaseComponent implements OnInit {

  dbInstance : DatabaseInstance;

  ngOnInit() {
    if (this._routeParams.get('dbId') && this._routeParams.get('code')) {
      let dbId = Number(this._routeParams.get('dbId'));
      let factory = this._routeParams.get('code')
      this.dbInstance = this._databaseService.getDatbaseById(factory, dbId);
    } else {
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
