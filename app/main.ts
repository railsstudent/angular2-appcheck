import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {FactoryService} from './factory-list/service/factory.service';
import {AppListService} from './factory-system/service/app-list.service';

bootstrap(AppComponent, [MATERIAL_PROVIDERS, ROUTER_PROVIDERS, FactoryService,
                        AppListService]);
