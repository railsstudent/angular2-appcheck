import {Injectable} from '@angular/core';

import {DatabaseListService} from '../../factory-system/service/database-list.service';
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
