import {Component, OnInit, Input } from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {AppListService} from './service/app-list.service';
import {Factory} from '../factory-list/model/factory';
import {AppDetail} from '../factory-app-detail/model/app-detail';


@Component({
  selector: 'app-list',
  templateUrl: 'app/factory-system/template/app-list.html'
})
export class AppListComponent implements OnInit {

  selectedAppList : any;
  factoryCode : string;

  ngOnInit() {
      console.log("ngOnInit of application list component fired.");
      this.factoryCode = this._routeParams.get('code');
       if (this.factoryCode) {
          this.selectedAppList = this._factoryAppListService.getAppListByFactory(
                                      this.factoryCode);
       } else {
          this.selectedAppList = [];
       }
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

  @Input()
  set refresh(refresh: boolean) {
      console.log('AppListComponent: refresh = ' + refresh);
      console.log('AppListComponent: factory code = ' + this.factoryCode);
      // reload data
      if (refresh) {
        this.selectedAppList =
            this._factoryAppListService.getAppListByFactory(this.factoryCode);
      }
  }
}
