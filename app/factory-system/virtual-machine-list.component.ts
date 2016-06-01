import {Component, OnInit, Input } from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {RouteParams} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

import {HardwareListService} from './service/hardware-list.service';
import {Hardware} from '../factory-hardware/model/hardware';

import {VirtualMachineListService} from './service/virtualmachine-list.service';
import {VirtualMachine} from '../factory-virtualmachine/model/virtual-machine';

@Component({
    selector: 'virtual-machine-list',
    directives: [MATERIAL_DIRECTIVES],
    templateUrl: 'app/factory-system/template/virtual-machine-list.html'
})
export class VirtualMachineListComponent implements OnInit {

  hardwareList: Array<Hardware> = new Array<Hardware>();
  factoryCode: string;
  vm : Array<VirtualMachine> = new Array<VirtualMachine>();

  ngOnInit() {
    console.log("ngOnInit of hardware list component fired.");
    this.factoryCode = this._routeParams.get('code');
    if (this.factoryCode) {
       this.hardwareList = this._hardwareListService.getHardwareByFactory(
                                        this.factoryCode);
    } else {
       this.hardwareList = [];
    }
  }

  constructor(private _hardwareListService: HardwareListService,
    private _routeParams: RouteParams) {
  }

  @Input()
  set refresh(refresh: boolean) {
      console.log('VirtualMachineListComponent: refresh = ' + refresh);
      console.log('VirtualMachineListComponent: factory code = ' + this.factoryCode);
      // reload data
      if (refresh) {
    //    this.selectedAppList =
    //        this._factoryAppListService.getAppListByFactory(this.factoryCode);
      }
  }
}
