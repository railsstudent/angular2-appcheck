import {Condition} from './ConditionEnum';


export class Hardware {

  id: number;
  code: string;
  name: string;
  model: string;
  manufacturer: string;
  yearOfService : number;
  condition: Condition;

  constructor (id: number, code: string, name: string, model: string,
    manufacturer: string, yearOfService: number, condition: Condition) {
       this.id = id;
       this.code = code;
       this.name = name;
       this.model = model;
       this.manufacturer = manufacturer;
       this.condition = condition;
    }
}
