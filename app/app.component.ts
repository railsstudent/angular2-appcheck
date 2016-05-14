import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES, Media, SidenavService} from "ng2-material/all";
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {FactoryListComponent} from "./factory-list/factory-list.component";
import {FactorySummaryComponent} from "./factory-system/factory-summary.component";
import {AppDetailComponent} from "./factory-app-detail/app-detail.component";
import {DatabaseComponent} from "./factory-database/database.component";

// communicate between sibling components
// http://stackoverflow.com/questions/35685801/angular-2-event-catching-between-sibling-components
@Component({
    selector: 'main-nav',
    directives: [MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES,
                  FactorySummaryComponent, FactoryListComponent,
                  AppDetailComponent, DatabaseComponent ],
    providers: [SidenavService],
    templateUrl: 'app/templates/app.html'
})
@RouteConfig([
  {path: '/factory/:code', name: 'FactorySummary', component: FactorySummaryComponent },
  {path: '/app/:appId', name: 'AppDetail', component: AppDetailComponent },
  {path: '/factory/:code/database/:dbId', name: 'DatabaseInstance', component: DatabaseComponent }
])
export class AppComponent {

  // dependency injection
  constructor(public sidenav: SidenavService,
    public media: Media) {
  }

  hasMedia(breakSize: string): boolean {
    return this.media.hasMedia(breakSize);
  }

  open(name: string) {
    this.sidenav.show(name);
  }

  close(name: string) {
    this.sidenav.hide(name);
  }
}
