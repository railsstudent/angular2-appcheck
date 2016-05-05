import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {DatabaseInstance} from '../../factory-database/model/database-instance';

@Injectable()
export class DatabaseListService {

  instances : Array<DatabaseInstance>;

  constructor() {
    this.instances = new Array<DatabaseInstance>();

//    this.instances.push(new DatabaseInstance());
  }

  getDBInstanceByFtyCode(code: string) {
    return [];
  }
}
