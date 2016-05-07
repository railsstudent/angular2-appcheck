import {Component, OnInit } from 'angular2/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Router, RouteParams} from 'angular2/router';
import {FactoryAppListService} from './service/factory-app.service';
import {Factory} from '../factory/model/factory';
import {FactoryService} from '../factory/service/factory.service';

@Component({
  selector: 'app-list',
  templateUrl: 'app/factory-app/template/app-list.html' ,
  directives: [MATERIAL_DIRECTIVES],
  providers: [FactoryAppListService]
})
export class FactoryAppListComponent implements OnInit {

  selectedAppList : any;

  ngOnInit() {
      let code = this._routeParams.get('code');
       if (code) {
         this.selectedAppList = this._factoryAppListService.getAppListByFactory(code);
       } else {
         this.selectedAppList = [];
       }
  }

  //  factory app list
  constructor(private _router: Router,
      private _routeParams: RouteParams,
      private _factoryAppListService: FactoryAppListService) {
  }

  onSelectApp(appId: number) {
      console.log("app id: " + appId);
      console.log("route to AppDetailComponent.");
      this._router.navigate(['AppDetail', { appId: appId }]);
  }
}
