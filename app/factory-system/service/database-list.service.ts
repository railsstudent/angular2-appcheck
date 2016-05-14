import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {DatabaseInstance} from '../../factory-database/model/database-instance';
import {DatabaseSchema} from '../../factory-database/model/database-schema';
import {FactoryService} from '../../factory-list/service/factory.service';


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
                  dbSchema.push(new DatabaseSchema(dbSchemaId, dbId, "Schema" + dbSchemaId, 35));
                  dbSchemaId = dbSchemaId + 1;
              });
              let dbInstance = new DatabaseInstance(dbId, factory.code, factory.code
                  + '_Instance_' + dbId, 'DB2', 350, dbSchema);
              dbArray.push(dbInstance);
              dbId = dbId + 1;
          })
          ref.mapFactoryDatabase[factory.code] = dbArray;
      });
  }

  getDBInstanceByFactory(factory: string) {
    if (this.mapFactoryDatabase[factory]) {
       return this.mapFactoryDatabase[factory];
    }
    return [];
  }

  getDBInstanceById(factory: string, id: number) {
    let result = this.getDBInstanceByFactory(factory);
    let foundDb = null;
    _.forEach(result, function(db) {
                if (_.isEqual(db['id'], id)) {
                    foundDb = db;
                }
              });
    return foundDb;
  }
}
