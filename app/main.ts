import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {MATERIAL_PROVIDERS} from 'ng2-material/all';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {FactoryService} from './factory-list/service/factory.service';
import {AppListService} from './factory-system/service/app-list.service';
import {DatabaseListService} from './factory-system/service/database-list.service';
import {HardwareListService} from './factory-system/service/hardware-list.service';
import {VirtualMachineListService} from './factory-system/service/virtualmachine-list.service';

bootstrap(AppComponent, [MATERIAL_PROVIDERS, ROUTER_PROVIDERS, FactoryService,
                        AppListService, DatabaseListService,
                        HardwareListService, VirtualMachineListService]);
