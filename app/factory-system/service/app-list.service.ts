import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {FactoryService} from '../../factory-list/service/factory.service';
import {Factory} from '../../factory-list/model/factory';

@Injectable()
export class AppListService {

    mapFactoryApp = {};

    constructor(_factoryService: FactoryService) {
      let factories =  _factoryService.getFactories();
      let chance = new Chance();
      let numApplications: number = chance.integer({min: 5, max: 50});
      let ref = this;
      let appId : number;

      appId = 1;
      _.forEach(factories, function(factory) {
          var appArray = [];
          _.forEach (_.range(0, numApplications, 1), function(i) {
              let app_name = chance.sentence({words: 3})
              appArray.push({ id: appId, name: factory.code + '' + app_name });
              appId = appId + 1;
          })
          ref.mapFactoryApp[factory.code] = appArray;
      });
    }

    getAppListByFactory(code: string) {
         if (this.mapFactoryApp[code]) {
            return this.mapFactoryApp[code];
         }
         return [];
    }

    getAppList() {
        return this.mapFactoryApp;
    }
}
