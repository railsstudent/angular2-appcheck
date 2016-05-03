
import {DatabaseSchema} from './database-schema';

export class DatabaseInstance {

  id: number;
  name: string;
  schema: Array<DatabaseSchema>;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.schema = new Array<DatabaseSchema>();
  }
}
