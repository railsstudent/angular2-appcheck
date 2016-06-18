import {Component, OnInit, Input } from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import * as _ from 'lodash';

import {DatabaseListService} from './service/database-list.service';
import {DatabaseInstance} from '../factory-database/model/database-instance';
import {FactoryService} from '../factory-list/service/factory.service';

@Component({
  selector: 'database-list',
  templateUrl: 'app/factory-system/template/database-list.html'
})
export class DatabaseListComponent  implements OnInit {

  databaseInstanceList : Array<DatabaseInstance>;
  factoryCode : string;

  ngOnInit() {
    console.log("ngOnInit of database list component fired.");
    this.factoryCode = this._routeParams.get('code');
    if (this.factoryCode) {
       this.databaseInstanceList = this._databaseListService.getDBInstancesByFactory(
                                        this.factoryCode);
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

  @Input()
  set refresh(refresh: boolean) {
      console.log('DatabaseListComponent: refresh = ' + refresh);
      console.log('DatabaseListComponent: factory code = ' + this.factoryCode);
      // reload data
      if (refresh) {
        this.databaseInstanceList =
            this._databaseListService.getDBInstancesByFactory(this.factoryCode);
      }
  }
}
