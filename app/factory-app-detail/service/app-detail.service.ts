import {Injectable} from 'angular2/core';
import * as _ from 'lodash';
import {AppDetail} from '../model/app-detail';
import {AppDependency} from '../model/app-dependency';

import {FactoryAppListService} from '../../factory-app/service/factory-app.service';

@Injectable()
export class AppDetailService {

    appDetailList : Array<AppDetail>;

    constructor(private factoryAppService: FactoryAppListService) {

      var allApps = factoryAppService.getAppList();
      var ref = this;
      this.appDetailList = new Array<AppDetail>();

      _.forEach(allApps, function(appArray, code) {
          console.log(code);
          var dependencies = [];
          _.forEach(_.range(0, 3, 1), function(i) {
              dependencies.push(new AppDependency('Dependency_' + i + '.dll',
                    'DLL', '1.0.1'));
          });
          _.forEach (appArray, function(obj) {
              var detail = new AppDetail(code, obj['id'], obj['id'], obj['name'],
                            '0.0.1', 'desktop', dependencies);
              ref.appDetailList.push(detail);
          })
      });
    }

    getAppDetail(appId: number) {
        var app = _.find(this.appDetailList, function(detail) {
                    return _.isEqual(detail.appId, appId);
                });
        if (_.isNull(app) || _.isUndefined(app)) {
          return null;
        }
        return app;
     }
}
