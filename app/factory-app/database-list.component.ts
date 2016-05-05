import {Component, OnInit } from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Router, RouteParams} from 'angular2/router';
import * as _ from 'lodash';

import {DatabaseListService} from './service/database-list.service';
import {DatabaseInstance} from '../factory-database/model/database-instance';

@Component({
  selector: 'database-list',
  templateUrl: 'app/factory-app/template/database-list.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [DatabaseListService]
})
export class DatabaseListComponent  implements OnInit {

  databaseInstanceList : Array<DatabaseInstance>;

  ngOnInit() {
    let code = this._routeParams.get('code');
    if (code) {
       this.databaseInstanceList = this._databaseListService.getDBInstanceByFactory(code);
    } else {
       this.databaseInstanceList = [];
    }
  }

  constructor (private _router : Router,
      private _routeParams: RouteParams,
      private _databaseListService: DatabaseListService) {

  }

  onSelectDBInstance(dbId: number) {
      console.log("database id: " + dbId);
      console.log("route to DatabaseInstance.");
      this._router.navigate(['DatabaseInstance', { databaseId: dbId }]);
  }
}
