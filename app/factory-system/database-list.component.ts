import {Component, OnInit } from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Router, RouteParams} from 'angular2/router';
import * as _ from 'lodash';

import {DatabaseListService} from './service/database-list.service';
import {DatabaseInstance} from '../factory-database/model/database-instance';

import {FactoryService} from '../factory-list/service/factory.service';

@Component({
  selector: 'database-list',
  templateUrl: 'app/factory-system/template/database-list.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [DatabaseListService, FactoryService]
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

  onSelectDBInstance(instance: DatabaseInstance) {
      console.log("database id: " + instance.id);
      console.log("factory code: " + instance.factory);
      console.log("route to DatabaseInstance.");
      this._router.navigate(['DatabaseInstance', { code:  instance.factory, dbId: instance.id }]);
  }
}
