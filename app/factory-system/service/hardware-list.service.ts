import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {FactoryService} from '../../factory-list/service/factory.service';
import {Hardware} from '../../factory-hardware/model/hardware';
import {Condition} from '../../factory-hardware/model/condition-enum';


@Injectable()
export class HardwareListService {

  mapFactoryHardware = {};

  constructor(_factoryService: FactoryService) {

    const alphabet = 'ABCDEFGHIJKLMINOPRSTUVWXYZ';
    const hardwareType = ['Barcode Printer', 'RFID Reader', 'Attendance Machine',
      'PC', 'Barcode Verifier', 'Laser Printer'];

    let factories =  _factoryService.getFactories();
    let ref = this;
    let hardwareId : number;
    let chance = new Chance();
    let numHardwares = chance.integer({min: 5, max: 100})

    hardwareId = 1;
    _.forEach(factories, function(factory) {
        let hardwareArray = new Array<Hardware>();
        _.forEach (_.range(0, numHardwares, 1), function(i) {
            let idx = chance.integer({min: 0, max: hardwareType.length - 1});
            let model = chance.sentence({words: 3});
            let manufacturer = chance.sentence({words: 5});
            let yearOfService = chance.integer({min: 1, max: 25});
            let conditionIdx = chance.integer({min: 0, max: 1});
            let hardware: Hardware = new Hardware(hardwareId, factory.code,
                hardwareType[idx], model, manufacturer,
                yearOfService, Condition[conditionIdx]);
            hardwareArray.push(hardware);
            hardwareId = hardwareId + 1;
        })
        ref.mapFactoryHardware[factory.code] = hardwareArray;
    });

  }

  getHardwareByFactory(factory: string) {
    if (this.mapFactoryHardware[factory]) {
       return this.mapFactoryHardware[factory];
    }
    return [];
  }

}
