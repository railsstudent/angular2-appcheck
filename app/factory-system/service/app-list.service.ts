
import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

import {FactoryService} from '../../factory-list/service/factory.service';
import {Factory} from '../../factory-list/model/factory';
import {AppDetail} from '../../factory-app-detail/model/app-detail';
import {AppDependency} from '../../factory-app-detail/model/app-dependency';

@Injectable()
export class AppListService {

    mapFactoryApp = {};
    appTypeList = ['Desktop', 'Web', 'Mobile', 'Wearable'];

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
              let typeIdx = chance.integer({min: 0, max: ref.appTypeList.length - 1});
              let type = ref.appTypeList[typeIdx];
              let dependencies : Array<AppDependency> = new Array<AppDependency>();
              // generate random data of application dependencies
              let numDependencies = chance.integer({min: 3, max: 50});
              _.forEach(_.range(0, numDependencies, 1), function(i) {
                 let dName = chance.string();
                 let dMajor = chance.integer({min: 0});
                 let dMinor = chance.integer({min: 0});
                 let dRev = chance.integer({min: 0});
                 let dVersion = dMajor + '.' + dMinor + '.' + dRev;
                 let dType: string  = '';
                 if (_.isEqual(type, 'Desktop')) {
                   dType = 'DLL';
                 } else if (_.isEqual(type, 'Web')) {
                   dType = 'Jar';
                 } else if (_.isEqual(type, 'Mobile')) {
                   dType = 'Jar';
                 } else if (_.isEqual(type, 'Wearable')) {
                   dType = 'Unknown';
                 }
                 dependencies.push(new AppDependency(dName, dType, dVersion));
              });
              let major = chance.integer({min: 0});
              let minor = chance.integer({min: 0});
              let rev = chance.integer({min: 0});
              let version = major + '.' + minor + '.' + rev;
              let app = new AppDetail(factory.code, appId, appId, app_name,
                  version, type, dependencies);
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

    getAppByFactoryAndId (code: string, id: number) {
       let app : AppDetail;
       let ll : Array<AppDetail> = this.getAppListByFactory(code);
       if (ll) {
           _.find(ll, function(l) {
              if (_.isEqual(l.id, id)) {
                  app = l;
              }
           });
           if (app) {
             return app;
           }
       }
       return null;
    }

    getAppList() {
        return this.mapFactoryApp;
    }
}
