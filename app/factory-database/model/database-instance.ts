
import {DatabaseSchema} from './database-schema';

export class DatabaseInstance {

  id: number;
  name: string;
  type: string;
  schema: Array<DatabaseSchema>;

  constructor(id: number, name: string, type: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.schema = new Array<DatabaseSchema>();
  }

  set schemas (schemas: Array<DatabaseSchema>) {
    this.schemas = schemas;
  }
}
