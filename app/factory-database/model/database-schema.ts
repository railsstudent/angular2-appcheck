
export class DatabaseSchema {

  id: number;
  dbId: number;
  name: string;
  memoryUsedInGB: number;

  constructor(id: number, dbId: number, name: string, memoryUsed: number) {
    this.id = id;
    this.dbId = dbId;
    this.name = name;
    this.memoryUsedInGB = memoryUsed;
  }
}
