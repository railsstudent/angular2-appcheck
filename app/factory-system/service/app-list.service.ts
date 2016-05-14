import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {FactoryService} from '../../factory-list/service/factory.service';
import {Factory} from '../../factory-list/model/factory';

@Injectable()
export class AppListService {

    mapFactoryApp = {};

    constructor(_factoryService: FactoryService) {
      let factories =  _factoryService.getFactories();

      var ref = this;
      var appId : number;

      appId = 1;
      _.forEach(factories, function(factory) {
          var appArray = [];
          _.forEach (_.range(0, 5, 1), function(i) {
              appArray.push({ id: appId, name: factory.code + ' Application Name ' + i });
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
