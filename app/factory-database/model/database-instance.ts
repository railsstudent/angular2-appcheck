
import {DatabaseSchema} from './database-schema';

export class DatabaseInstance {

  id: number;
  factory: string;
  name: string;
  type: string;
  schema: Array<DatabaseSchema>;

  constructor(id: number, factory: string, name: string, type: string) {
    this.id = id;
    this.factory = factory;
    this.name = name;
    this.type = type;
    this.schema = new Array<DatabaseSchema>();
  }

  set schemas (schemas: Array<DatabaseSchema>) {
    this.schemas = schemas;
  }
}
