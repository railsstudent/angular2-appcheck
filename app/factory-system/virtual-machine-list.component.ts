import {Component, OnInit, Input } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouteParams} from '@angular/router-deprecated';
import {MATERIAL_DIRECTIVES} from "ng2-material";

import {VirtualMachineListService} from './service/virtualmachine-list.service';
import {VirtualMachine} from '../factory-virtualmachine/model/virtual-machine';
import {Condition} from '../factory-hardware/model/condition-enum';

@Component({
    selector: 'virtual-machine-list',
    templateUrl: 'app/factory-system/template/virtualmachine-list.html',
    directives: [MATERIAL_DIRECTIVES]
})
export class VirtualMachineListComponent implements OnInit {

  factoryCode: string;
  vmList : Array<VirtualMachine> = new Array<VirtualMachine>();
  condition: string[];
  pagination = {
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 0
  };
  availableLength = [5,10];
  pagedVMList: Array<any> = [];

  ngOnInit() {
    console.log("ngOnInit of virtual machine list component fired.");
    this.factoryCode = this._routeParams.get('code');
    if (this.factoryCode) {
       this.vmList = this._vmListService.getVirtualMachineByFactory(this.factoryCode);
    } else {
       this.vmList = [];
    }
    this.condition = this._vmListService.getCondition();
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 5,
      totalItems: this.vmList.length
    }
    console.log(this.pagination);
    this.refreshVMList();
  }

  constructor(private _vmListService : VirtualMachineListService,
    private _routeParams: RouteParams) {
  }

  refreshVMList() {
    let start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage,
      end = start + this.pagination.itemsPerPage;
    this.pagedVMList = this.vmList.slice(start, end);
  }

  detectChange(event) {
    console.log('pagination detection');
    this.pagination = event.pagination;
    this.refreshVMList();
    console.log(this.pagination);
  }
}
