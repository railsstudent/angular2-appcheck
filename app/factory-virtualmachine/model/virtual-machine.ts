
export class VirtualMachine {

  id: number;
  code: string;
  ipAddress: string;
  dns: string;
  osPlatform: string;
  ram:  number;
  diskSpace: number;
  manufacturer: string;
  model: string;
  yearOfService : number;
  condition: string;

  constructor (id: number, code: string, ipAddress: string, dns: string,
    osPlatform: string, ram: number, diskSpace: number,
    manufacturer: string, model: string, yearOfService: number,
    condition: string) {
       this.id = id;
       this.code = code;
       this.ipAddress = ipAddress;
       this.dns = dns;
       this.osPlatform = osPlatform;
       this.ram = ram;
       this.diskSpace = diskSpace;
       this.manufacturer = manufacturer;
       this.model = model;
       this.yearOfService = yearOfService;
       this.condition = condition;
    }

}
