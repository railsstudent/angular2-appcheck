import {Component, OnInit, Input } from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import * as _ from 'lodash';
import {MATERIAL_DIRECTIVES} from "ng2-material";

import {DatabaseListService} from './service/database-list.service';
import {DatabaseInstance} from '../factory-database/model/database-instance';
import {FactoryService} from '../factory-list/service/factory.service';

@Component({
  selector: 'database-list',
  templateUrl: 'app/factory-system/template/database-list.html',
  directives: [MATERIAL_DIRECTIVES]
})
export class DatabaseListComponent  implements OnInit {

  databaseInstanceList : Array<DatabaseInstance>;
  factoryCode : string;
  pagination = {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 0
  };
  availableLength = [5];
  pagedDatabaseList: Array<any> = [];

  ngOnInit() {
    console.log("ngOnInit of database list component fired.");
    this.factoryCode = this._routeParams.get('code');
    if (this.factoryCode) {
       this.databaseInstanceList = this._databaseListService.getDBInstancesByFactory(
                                        this.factoryCode);
    } else {
       this.databaseInstanceList = [];
    }
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 5,
      totalItems: this.databaseInstanceList.length
    }
    console.log(this.pagination);
    this.refreshDatabaseList();
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

  refreshDatabaseList() {
    let start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
      end = start + this.pagination.itemsPerPage;
    this.pagedDatabaseList = this.databaseInstanceList.slice(start, end);
  }

  detectChange(event) {
    console.log('pagination detection');
    this.pagination = event.pagination;
    this.refreshDatabaseList();
    console.log(this.pagination);
  }
}
