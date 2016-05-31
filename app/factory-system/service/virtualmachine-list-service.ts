import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {FactoryService} from '../../factory-list/service/factory.service';
import {VirtualMachine} from '../../factory-virtualmachine/model/virtual-machine';
import {Condition} from '../../factory-hardware/model/condition-enum';

@Injectable()
export class VirtualMachineListService {

  mapFactoryVirtualMachine = {};

  constructor(_factoryService: FactoryService) {

    const alphabet = 'ABCDEFGHIJKLMINOPRSTUVWXYZ';
    const ramChoices = [8, 16, 12, 4];
    const vendorChoices = ['Lenovo', 'Dell', 'Asus', 'HP', 'Acer',
          'Sony', 'Toshiba'];
    const platformChoices = ['Windows Server 2012 SP 2', 'Ubuntu Server',
      'Red Hat Server', 'Debian Server', 'Windows Server 2008 SP2',
      'Windows Server 2003 SP3'];

    let factories =  _factoryService.getFactories();
    let ref = this;
    let virualMachineId : number;
    let chance = new Chance();
    let numVM = chance.integer({min: 20, max: 100})

    virualMachineId = 1;
    _.forEach(factories, function(factory) {
        let vmArray = new Array<VirtualMachine>();
        _.forEach (_.range(0, numVM, 1), function(i) {
            let ramIdx = chance.integer({min: 0, max: ramChoices.length - 1});
            let vendorIdx = chance.integer({min: 0, max: vendorChoices.length - 1});
            let platformIdx = chance.integer({min: 0, max: platformChoices.length - 1});
            let ip = chance.ip();
            let dns = chance.domain({tld: 'com'});
            let ram : number = ramChoices[ramIdx];
            let diskSpace : number = chance.integer({min: 25, max: 750});
            let platform = platformChoices[platformIdx];
            let model = chance.sentence({words: 3});
            let vendor = vendorChoices[vendorIdx];
            let yearOfService = chance.integer({min: 1, max: 25});
            let conditionIdx = chance.integer({min: 0, max: 1});
            let vm : VirtualMachine = new VirtualMachine(
                virualMachineId, factory.code, ip, dns,
                  platform, ram, diskSpace, vendor, model,
                yearOfService, Condition[conditionIdx]);
            vmArray.push(vm);
            virualMachineId = virualMachineId + 1;
        })
        ref.mapFactoryVirtualMachine[factory.code] = vmArray;
    });
  }

  getVirtualMachineByFactory(factory: string) {
    if (this.mapFactoryVirtualMachine[factory]) {
       return this.mapFactoryVirtualMachine[factory];
    }
    return [];
  }
}
