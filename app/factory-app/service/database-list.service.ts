import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {DatabaseInstance} from '../../factory-database/model/database-instance';
import {FactoryService} from '../../factory/service/factory.service';


@Injectable()
export class DatabaseListService {

  mapFactoryDatabase = {};
  instances : Array<DatabaseInstance>;

  constructor(_factoryService: FactoryService) {
      this.instances = new Array<DatabaseInstance>();
      let factories =  _factoryService.getFactories();

      var ref = this;
      var dbId : number;

      dbId = 1;
      _.forEach(factories, function(factory) {
          var appArray = [];
          _.forEach (_.range(0, 5, 1), function(i) {
              appArray.push(new DatabaseInstance(dbId, factory.code, factory.code
                + '_Instance_' + i, 'DB2'));
              dbId = dbId + 1;
          })
          ref.mapFactoryDatabase[factory.code] = appArray;
      });
  }

  getDBInstanceByFactory(code: string) {
    if (this.mapFactoryDatabase[code]) {
       return this.mapFactoryDatabase[code];
    }
    return [];
  }
}
