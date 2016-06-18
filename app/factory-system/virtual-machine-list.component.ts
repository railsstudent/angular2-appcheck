import {Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouteParams} from '@angular/router-deprecated';
//import {MATERIAL_DIRECTIVES} from 'ng2-material';

import {VirtualMachineListService} from './service/virtualmachine-list.service';
import {VirtualMachine} from '../factory-virtualmachine/model/virtual-machine';

@Component({
    selector: 'virtual-machine-list',
  //  directives: [MATERIAL_DIRECTIVES],
    templateUrl: 'app/factory-system/template/virtualmachine-list.html'
})
export class VirtualMachineListComponent implements OnInit {

  factoryCode: string;
  vmList : Array<VirtualMachine> = new Array<VirtualMachine>();

  ngOnInit() {
    console.log("ngOnInit of virtual machine list component fired.");
    this.factoryCode = this._routeParams.get('code');
    if (this.factoryCode) {
       this.vmList = this._vmListService.getVirtualMachineByFactory(this.factoryCode);
    } else {
       this.vmList = [];
    }
  }

  constructor(private _vmListService : VirtualMachineListService,
    private _routeParams: RouteParams) {
  }

  @Input()
  set refresh(refresh: boolean) {
      console.log('VirtualMachineListComponent: refresh = ' + refresh);
      console.log('VirtualMachineListComponent: factory code = ' + this.factoryCode);
      // reload data
      if (refresh) {
          this.vmList = this._vmListService.getVirtualMachineByFactory(this.factoryCode);
      }
  }
}
