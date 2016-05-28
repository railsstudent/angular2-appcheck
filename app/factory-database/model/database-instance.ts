
import {DatabaseSchema} from './database-schema';
import * as _ from 'lodash';

export class DatabaseInstance {

  id: number;
  factory: string;
  name: string;
  type: string;
  storage: number;
  schema: Array<DatabaseSchema>;
  usedSpace: number;
  availSpace : number;

  constructor(id: number, factory: string, name: string, type: string,
      storage: number, schema: Array<DatabaseSchema>) {
    this.id = id;
    this.factory = factory;
    this.name = name;
    this.type = type;
    this.storage = storage;
    this.schema = schema;
    this.usedSpace = 0;
    let ref = this;
    _.forEach(this.schema, function(s) {
        ref.usedSpace = ref.usedSpace + s.memoryUsedInGB;
    });
    this.availSpace = _.round(this.storage - this.usedSpace, 2);
    this.usedSpace = _.round(this.usedSpace, 2);
  }
}
