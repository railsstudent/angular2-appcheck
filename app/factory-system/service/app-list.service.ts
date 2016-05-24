import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {FactoryService} from '../../factory-list/service/factory.service';
import {Factory} from '../../factory-list/model/factory';
import {AppDetail} from '../../factory-app-detail/model/app-detail';
import {AppDependency} from '../../factory-app-detail/model/app-dependency';

@Injectable()
export class AppListService {

    mapFactoryApp = {};
    applicationType = ['Desktop', 'Web', 'Mobile', 'Wearable'];

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
              let typeIdx = chance.integer({min: 0, max: this.applicationType.length - 1});
              let app = { id: appId,
                        name: app_name,
                        type: this.applicationType[typeIdx],
                        dependencies: [] };
              // generate random data of application dependencies
              let numDependencies = chance.integer({min: 3, max: 50});
              _.forEach(_.range(0, numDependencies, 1), function(i) {

              });

              appArray.push(app);
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
