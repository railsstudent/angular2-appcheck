
export class DatabaseSchema {

  id: number;
  dbId: number;
  name: string;
  memoryUsedInGB: number;
  numTables: number;
  numStoredProcedures: number;
  numFunctions: number;
  numIndexes : number;

  constructor(id: number, dbId: number, name: string, memoryUsed: number,
     numTables: number, numStoredProcedures: number,
     numFunctions: number, numIndexes: number) {
    this.id = id;
    this.dbId = dbId;
    this.name = name;
    this.memoryUsedInGB = memoryUsed;
    this.numTables = numTables;
    this.numStoredProcedures = numStoredProcedures;
    this.numFunctions = numFunctions;
    this.numIndexes = numIndexes;
  }
}
