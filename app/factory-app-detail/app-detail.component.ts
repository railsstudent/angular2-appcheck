import {Component, OnInit } from '@angular/core';
//import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {Router, RouteParams} from '@angular/router-deprecated';
import * as _ from 'lodash';

import {AppListService} from '../factory-system/service/app-list.service';
import {AppDetail} from './model/app-detail';

@Component({
  selector: 'app-detail',
  templateUrl: 'app/factory-app-detail/template/app-detail.html' //,
  //directives: [MATERIAL_DIRECTIVES]
})
export class AppDetailComponent implements OnInit  {

  appDetail : AppDetail;

  ngOnInit() {
    let code = this._routeParams.get('code');
    let appId = this._routeParams.get('appId');
    if (code && appId) {
        let intAppId = Number(appId);
        this.appDetail = this._appListService.getAppByFactoryAndId(code, intAppId);
    } else {
        this.appDetail = null;
    }
  }

  constructor(private _router: Router,
      private _routeParams : RouteParams,
      private _appListService: AppListService) {
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
