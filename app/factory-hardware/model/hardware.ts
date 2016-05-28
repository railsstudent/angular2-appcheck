import {Condition} from './ConditionEnum';


export class Hardware {

  name: string;
  model: string;
  manufacturer: string;
  yearOfService : number;
  condition: Condition;

  constructor (name: string, model: string, manufacturer: string, yearOfService: number,
    condition: Condition) {
       this.name = name;
       this.model = model;
       this.manufacturer = manufacturer;
       this.condition = condition;
    }
}
