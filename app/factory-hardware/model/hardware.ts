import {Condition} from './condition-enum';

export class Hardware {

  id: number;
  code: string;
  name: string;
  model: string;
  manufacturer: string;
  yearOfService : number;
  condition: string;

  constructor (id: number, code: string, name: string, model: string,
    manufacturer: string, yearOfService: number, condition: string) {
       this.id = id;
       this.code = code;
       this.name = name;
       this.model = model;
       this.manufacturer = manufacturer;
       this.condition = condition;
       this.yearOfService = yearOfService;
    }
}
