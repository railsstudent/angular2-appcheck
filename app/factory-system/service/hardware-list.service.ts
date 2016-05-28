import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {FactoryService} from '../../factory-list/service/factory.service';

@Injectable()
export class HardwareListService {

  constructor(_factoryService: FactoryService) {

  }

  getHardwareByFactory(factory: string) {
    return [];
  }

}
