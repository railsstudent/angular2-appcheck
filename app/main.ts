import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';

import {APP_BASE_HREF} from '@angular/common';
import {provide} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {FactoryService} from './factory-list/service/factory.service';
import {AppListService} from './factory-system/service/app-list.service';
import {DatabaseListService} from './factory-system/service/database-list.service';
import {HardwareListService} from './factory-system/service/hardware-list.service';
import {VirtualMachineListService} from './factory-system/service/virtualmachine-list.service';

bootstrap(AppComponent, [MATERIAL_PROVIDERS,
                        ROUTER_PROVIDERS, FactoryService,
                        AppListService, DatabaseListService,
                        HardwareListService, VirtualMachineListService,
                        provide(APP_BASE_HREF, { useValue: '/' })]);
