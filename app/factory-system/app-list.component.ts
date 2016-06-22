import {Component, OnInit, Input } from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {AppListService} from './service/app-list.service';
import {Factory} from '../factory-list/model/factory';
import {AppDetail} from '../factory-app-detail/model/app-detail';
import {MATERIAL_DIRECTIVES} from "ng2-material";

@Component({
  selector: 'app-list',
  templateUrl: 'app/factory-system/template/app-list.html',
  directives: [MATERIAL_DIRECTIVES]
})
export class AppListComponent implements OnInit {

  selectedAppList : any;
  factoryCode : string;
  pagination = {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 0
  };
  availableLength = [5];
  pagedAppList: Array<any> = [];

  ngOnInit() {
      console.log("ngOnInit of application list component fired.");
      this.factoryCode = this._routeParams.get('code');
       if (this.factoryCode) {
          this.selectedAppList = this._factoryAppListService.getAppListByFactory(
                                      this.factoryCode);
       } else {
          this.selectedAppList = [];
       }
       this.pagination = {
         currentPage: 1,
         itemsPerPage: 5,
         totalItems: this.selectedAppList.length
       }
       console.log(this.pagination);
       this.refreshAppList();
  }

  //  factory app list
  constructor(private _router: Router,
      private _routeParams: RouteParams,
      private _factoryAppListService: AppListService) {
  }

  onSelectApp(app: AppDetail) {
      console.log("app id: " + app.id);
      console.log("factory code: " + app.code);
      console.log("route to AppDetailComponent.");
      this._router.navigate(['AppDetail', { code: app.code, appId: app.id }]);
  }

  refreshAppList() {
    let start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
      end = start + this.pagination.itemsPerPage;
    this.pagedAppList = this.selectedAppList.slice(start, end);
  }

  detectChange(event) {
    console.log('pagination detection');
    this.pagination = event.pagination;
    this.refreshAppList();
    console.log(this.pagination);
  }
}
