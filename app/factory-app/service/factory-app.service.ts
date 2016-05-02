import {Injectable} from 'angular2/core';
import * as _ from 'lodash';

@Injectable()
export class FactoryAppListService {

    mapFactoryApp = new Map();

    constructor() {
      let codes = [ 'TAA', 'PAP', 'IG', 'TG1/3', 'TG2/4', 'MCL', 'TAV/TV2', 'VNG', 'KAT'];

      var ref = this;
      var appId : number;

      appId = 1;
      _.forEach(codes, function(code) {
          var appArray = [];
          _.forEach (_.range(0, 5, 1), function(i) {
              appArray.push({ id: appId, name: code + '_Application ' + i });
              appId = appId + 1;
          })
          ref.mapFactoryApp.set(code, appArray);
      });
    }

    getAppListByFactory(code: string) {
         if (this.mapFactoryApp.has(code)) {
           return this.mapFactoryApp.get(code);
         }
         return [];
    }

    getAppList() {
        return this.mapFactoryApp;
    }
}
