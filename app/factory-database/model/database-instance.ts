
import {DatabaseSchema} from './database-schema';
import * as _ from 'lodash';

export class DatabaseInstance {

  id: number;
  factory: string;
  name: string;
  type: string;
  storage: number;
  schema: Array<DatabaseSchema>;

  constructor(id: number, factory: string, name: string, type: string,
      storage: number, schema: Array<DatabaseSchema>) {
    this.id = id;
    this.factory = factory;
    this.name = name;
    this.type = type;
    this.storage = storage;
    this.schema = schema;
  }
}