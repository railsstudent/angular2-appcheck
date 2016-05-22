import {Component, OnInit, Input } from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Router, RouteParams} from 'angular2/router';
import {AppListService} from './service/app-list.service';
import {Factory} from '../factory-list/model/factory';

@Component({
  selector: 'app-list',
  templateUrl: 'app/factory-system/template/app-list.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [AppListService]
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

  onSelectApp(appId: number) {
      console.log("app id: " + appId);
      console.log("route to AppDetailComponent.");
      this._router.navigate(['AppDetail', { appId: appId }]);
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
