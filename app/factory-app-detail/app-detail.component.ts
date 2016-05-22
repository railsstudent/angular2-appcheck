import {Component, OnInit } from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Router, RouteParams} from 'angular2/router';
import * as _ from 'lodash';

import {AppListService} from '../factory-system/service/app-list.service';
import {AppDetailService} from './service/app-detail.service';
import {AppDetail} from './model/app-detail';

@Component({
  selector: 'app-detail',
  templateUrl: 'app/factory-app-detail/template/app-detail.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [AppDetailService, AppListService]
})
export class AppDetailComponent implements OnInit  {

  appDetail : AppDetail;
  factoryCode : string;

  ngOnInit() {
    let appId = this._routeParams.get('appId');
    if (appId) {
        let intAppId = Number(appId);
        this.appDetail = this._appDetailService.getAppDetail(intAppId);
    } else {
        this.appDetail = null;
    }
  }

  constructor(private _router: Router,
      private _routeParams : RouteParams,
      private _appDetailService: AppDetailService) {
  }

  onReturn() {
     if (this.appDetail) {
       this._router.navigate(["FactorySummary", { code: this.appDetail.code } ]);
     } else {
       // default to TAA
       this._router.navigate(["FactorySummary", { code: 'TAA' } ]);
     }
  }
}
