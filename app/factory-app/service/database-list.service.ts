import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {DatabaseInstance} from '../../factory-database/model/database-instance';

@Injectable()
export class DatabaseListService {

  mapFactoryDatabase = {};
  instances : Array<DatabaseInstance>;

  constructor() {
    this.instances = new Array<DatabaseInstance>();

//    this.instances.push(new DatabaseInstance());
  }

  getDBInstanceByFactory(code: string) {
    if (this.mapFactoryDatabase[code]) {
       return this.mapFactoryDatabase[code];
    }
    return [];
  }
}
