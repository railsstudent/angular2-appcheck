import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";
import {Router, RouteParams} from 'angular2/router';
import {DatabaseInstance} from './model/database-instance';


@Component({
    selector: 'database',
    directives: [MATERIAL_DIRECTIVES ],
    providers: [SidenavService],
    templateUrl: 'app/factory-database/template/database.html'
})
export class DatabaseComponent {

  dbInstance : DatabaseInstance;

  constructor(private _router: Router) {

  }

  onReturn(dbInstance) {
    if (this.dbInstance) {
      this._router.navigate(["FactorySummary", { code: this.dbInstance.factory} ]);
    } else {
      // default to TAA
      this._router.navigate(["FactorySummary", { code: 'TAA' } ]);
    }
  }

}
