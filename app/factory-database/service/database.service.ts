import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {DatabaseListService} from '../../factory-app/service/database-list.service';

import {DatabaseInstance} from '../model/database-instance';
import {DatabaseSchema} from '../model/database-schema';

@Injectable()
export class DatabaseService {

  databaseList : Array<DatabaseInstance>;

  constructor(private _databaseListService: DatabaseListService) {
  }

  getDatbaseById(factory: string, id: number) {
    return this._databaseListService.getDBInstanceById(factory, id);
  }
}
