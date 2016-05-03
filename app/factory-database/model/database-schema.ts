
export class DatabaseSchema {

  id: number;
  dbId: number;
  name: string;
  memoryUsed: number;

  constructor(id: number, dbId: number, name: string, memoryUsed: number) {
    this.id = id;
    this.dbId = dbId;
    this.name = name;
    this.memoryUsed = memoryUsed;
  }
}
