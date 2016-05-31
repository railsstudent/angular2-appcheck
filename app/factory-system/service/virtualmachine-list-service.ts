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
    const hardwareType = ['Barcode Printer', 'RFID Reader', 'Attendance Machine',
      'PC', 'Barcode Verifier', 'Laser Printer'];

    let factories =  _factoryService.getFactories();
    let ref = this;
    let virualMachineId : number;
    let chance = new Chance();
    let numVM = chance.integer({min: 20, max: 100})

    virualMachineId = 1;
    _.forEach(factories, function(factory) {
        let vmArray = new Array<VirtualMachine>();
        _.forEach (_.range(0, numVM, 1), function(i) {
            let idx = chance.integer({min: 0, max: hardwareType.length - 1});
            let model = chance.sentence({words: 3});
            let manufacturer = chance.sentence({words: 5});
            let yearOfService = chance.integer({min: 1, max: 25});
            let conditionIdx = chance.integer({min: 0, max: 1});
            let vm : VirtualMachine = new VirtualMachine(
                virualMachineId, factory.code, '', '',
                '', 10, 10, manufacturer, model,
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
