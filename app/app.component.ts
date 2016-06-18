import {Component} from '@angular/core';
import {Media} from 'ng2-material';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {FactoryListComponent} from "./factory-list/factory-list.component";
import {FactorySummaryComponent} from "./factory-system/factory-summary.component";
import {AppDetailComponent} from "./factory-app-detail/app-detail.component";
import {DatabaseComponent} from "./factory-database/database.component";

@Component({
    selector: 'main-nav',
    templateUrl: 'app/templates/app.html',
    directives: [ ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES,
                 FactorySummaryComponent, FactoryListComponent,
                 AppDetailComponent, DatabaseComponent]
})
@RouteConfig([
  {path: '/factory/:code', name: 'FactorySummary', component: FactorySummaryComponent },
  {path: '/factory/:code/app/:appId', name: 'AppDetail', component: AppDetailComponent },
  {path: '/factory/:code/database/:dbId', name: 'DatabaseInstance', component: DatabaseComponent }
])
export class AppComponent {

  // dependency injection
  constructor(public media: Media) {
  }

  hasMedia(breakSize: string): boolean {
    return this.media.hasMedia(breakSize);
  }
}
