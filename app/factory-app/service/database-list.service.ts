import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {DatabaseInstance} from '../../factory-database/model/database-instance';
import {DatabaseSchema} from '../../factory-database/model/database-schema';
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
      var dbSchemaId: number;

      dbId = 1;
      dbSchemaId = 1;
      _.forEach(factories, function(factory) {
          let dbArray = new Array<DatabaseInstance>();
          _.forEach (_.range(0, 5, 1), function(i) {
              let dbSchema = new Array<DatabaseSchema>();
              _.forEach (_.range(0, 6, 1), function(i) {
                  dbSchema.push(new DatabaseSchema(dbSchemaId, dbId, "Schema" + dbSchemaId, 20));
                  dbSchemaId = dbSchemaId + 1;
              });
              let dbInstance = new DatabaseInstance(dbId, factory.code, factory.code
                  + '_Instance_' + dbId, 'DB2', dbSchema);
              dbArray.push(dbInstance);
              dbId = dbId + 1;
          })
          ref.mapFactoryDatabase[factory.code] = dbArray;
      });
  }

  getDBInstanceByFactory(code: string) {
    if (this.mapFactoryDatabase[code]) {
       return this.mapFactoryDatabase[code];
    }
    return [];
  }

  getDBInstanceById(id: number) {
    let result = null;
    _.forEach(this.mapFactoryDatabase, function(dbArray, code) {
      _.forEach(dbArray, function(db) {
          if (_.isEqual(db['id'], id)) {
             result = db;
          }
      });
    });
    if (result) { return result; }
    else {
      return null;
    }
  }
}
