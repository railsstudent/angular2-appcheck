import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {DatabaseInstance} from '../../factory-database/model/database-instance';
import {DatabaseSchema} from '../../factory-database/model/database-schema';
import {FactoryService} from '../../factory-list/service/factory.service';


@Injectable()
export class DatabaseListService {

  mapFactoryDatabase = {};
//  instances : Array<DatabaseInstance>;

  constructor(_factoryService: FactoryService) {

      const alphabet = 'ABCDEFGHIJKLMINOPRSTUVWXYZ';

  //    this.instances = new Array<DatabaseInstance>();
      let factories =  _factoryService.getFactories();
      let ref = this;
      let dbId : number;
      let dbSchemaId: number;
      let chance = new Chance();
      let numDatabases = chance.integer({min: 2, max: 10})

      dbId = 1;
      dbSchemaId = 1;
      _.forEach(factories, function(factory) {
          let dbArray = new Array<DatabaseInstance>();
          _.forEach (_.range(0, numDatabases, 1), function(i) {
              let dbSchema = new Array<DatabaseSchema>();
              let numSchemas = chance.integer({min: 1, max: 10});
              let instanceName = chance.string({pool: alphabet, length: 10});
              let used: number = 0;
              _.forEach (_.range(0, numSchemas, 1), function(i) {
                  let schemaName = chance.string({pool: alphabet, length: 10});
                  let numTables = chance.integer({min: 100, max: 500});
                  let numSp = chance.integer({min: 20, max: 150});
                  let numFunc = chance.integer({min: 50, max: 500});
                  let numIdx = chance.integer({min: 50, max: 3000});
                  let memoryUsed = chance.floating({min: 25, max: 60, fixed: 2});
                  used = used + memoryUsed;
                  dbSchema.push(new DatabaseSchema(dbSchemaId, dbId, schemaName,
                         memoryUsed, numTables, numSp, numFunc, numIdx));
                  dbSchemaId = dbSchemaId + 1;
              });
              let storage = chance.floating({fixed: 0, min: used + 1, max: 750});
              let dbInstance = new DatabaseInstance(dbId, factory.code, instanceName,
                  'DB2', storage, dbSchema);
              dbArray.push(dbInstance);
              dbId = dbId + 1;
          })
          ref.mapFactoryDatabase[factory.code] = dbArray;
      });
  }

  getDBInstancesByFactory(factory: string) {
    if (this.mapFactoryDatabase[factory]) {
       return this.mapFactoryDatabase[factory];
    }
    return [];
  }

  getDBInstanceById(factory: string, id: number) {
    let result = this.getDBInstancesByFactory(factory);
    let foundDb = null;
    _.forEach(result, function(db) {
                if (_.isEqual(db['id'], id)) {
                    foundDb = db;
                }
              });
    return foundDb;
  }
}
