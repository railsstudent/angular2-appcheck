import {Component, OnInit } from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import * as _ from 'lodash';
import {MATERIAL_DIRECTIVES} from "ng2-material";

import {AppListService} from '../factory-system/service/app-list.service';
import {AppDetail} from './model/app-detail';

@Component({
  selector: 'app-detail',
  templateUrl: 'app/factory-app-detail/template/app-detail.html',
  directives: [MATERIAL_DIRECTIVES]
})
export class AppDetailComponent implements OnInit  {

  appDetail : AppDetail;
  pagination = {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 0
  };
  availableLength = [5, 10, 15];
  pagedAppDetailList: Array<any> = [];

  ngOnInit() {
    let code = this._routeParams.get('code');
    let appId = this._routeParams.get('appId');
    if (code && appId) {
        let intAppId = Number(appId);
        this.appDetail = this._appListService.getAppByFactoryAndId(code, intAppId);
    } else {
        this.appDetail = null;
    }
    if (this.appDetail) {
      this.pagination = {
        currentPage: 1,
        itemsPerPage: 5,
        totalItems: this.appDetail.dependencies.length
      }
    } else {
      this.pagination = {
        currentPage: 1,
        itemsPerPage: 5,
        totalItems: 0
      }
    }
    console.log(this.pagination);
    this.refreshAppDependencyList();
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

  refreshAppDependencyList() {
    let start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
      end = start + this.pagination.itemsPerPage;
    if (this.appDetail) {
      this.pagedAppDetailList = this.appDetail.dependencies.slice(start, end);
    } else {
      this.pagedAppDetailList = [];
    }
  }

  detectChange(event) {
    console.log('pagination detection');
    this.pagination = event.pagination;
    this.refreshAppDependencyList();
    console.log(this.pagination);
  }
}
